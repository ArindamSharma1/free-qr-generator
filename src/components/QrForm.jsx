import React, { useState } from "react";

export default function QrForm({ onGenerate }) {
  const [mode, setMode] = useState("text");
  const [data, setData] = useState("");
  const [color, setColor] = useState("#000000");  // NEW

  function handleSubmit(e){
    e.preventDefault();
    onGenerate({ data, mode, color }); // added color here
  }
<div className="mode-tabs">
  <button 
    type="button" 
    className={mode === "text" ? "active" : ""} 
    onClick={()=>setMode("text")}
  >Text</button>

  <button 
    type="button" 
    className={mode === "wifi" ? "active" : ""} 
    onClick={()=>setMode("wifi")}
  >Wi-Fi</button>

  <button 
    type="button" 
    className={mode === "contact" ? "active" : ""} 
    onClick={()=>setMode("contact")}
  >Contact</button>
</div>

  return (
    <form onSubmit={handleSubmit} className="qr-form">

      <select value={mode} onChange={e=>setMode(e.target.value)}>
        <option value="text">Text / Link</option>
        <option value="wifi">Wi-Fi</option>
        <option value="contact">Contact</option>
      </select>
      
    <span className="mode-help">?</span>

      <input
        type="text"
        placeholder={
          mode === "text" 
          ? "Enter text or URL" 
          : mode === "wifi"
          ? "WiFi SSID|PASSWORD|WEP/WPA"
          : "Name|Phone|Email"
        }
        value={data}
        onChange={(e)=>setData(e.target.value)}
      />

{/* only new field */}
<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
  <span style={{fontSize:"0.8rem", color:"var(--muted)", marginBottom:"4px"}}>
    Pick Color
  </span>

  <input
    type="color"
    value={color}
    onChange={(e)=>setColor(e.target.value)}
    style={{ width:50, height:30, padding:6, cursor:'pointer', borderRadius:8 }}
  />
</div>

      <button type="submit">Generate QR</button>
    </form>
  );
}

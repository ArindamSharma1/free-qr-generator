export function goQrUrl({ data, mode, color = "#000000" }) {

  let formatted = data;

  if(mode === "wifi"){
    // user enters SSID|PASS|TYPE (like WPA)
    const [ssid,pwd,security] = data.split("|");
    formatted = `WIFI:T:${security||"WPA"};S:${ssid};P:${pwd};;`;
  }

  if(mode === "contact"){
    // name|phone|email
    const [name,phone,email] = data.split("|");
    formatted = `MECARD:N:${name};TEL:${phone};EMAIL:${email};;`;
  }

  const hex = color.replace("#","");

  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(formatted)}&color=${hex}`;
}

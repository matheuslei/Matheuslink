function alterarImagem(avatar) {
  let id = document.getElementById('avatar');
  if ((avatar = id)) {
    document.getElementById('avatar').src = 'https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=https://matheuslei.github.io/Matheuslink/';
    document.getElementById('avatar').id = 'qrcode';
  } else {
    document.getElementById('qrcode').src =
      'https://avatars.githubusercontent.com/u/65515537?s=400&u=3c49bdfc835a575b9fb379afb9458bece6c9bf42&v=4';
    document.getElementById('qrcode').id = 'avatar';
  }
}

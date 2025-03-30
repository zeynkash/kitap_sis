const express = require('express');
const path = require('path');


const app = express();
const port = 3128;

// Public klasörünü sunucuya bağla
app.use(express.static(path.join(__dirname, '/')));

// Ana sayfayı sunmak için (opsiyonel)
// Bu route, public klasöründeki index.html dosyasını otomatik olarak sunar.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/index.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/contact.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/about.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/login.html'));
});
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/signup.html'));
});

app.get('/sepet', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/sepet.html'));
});
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/products.html'));
});
app.get('/orders', (req, res) => {
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/orders.html'));
});
app.get('/detail', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/detail.html'));
});
app.get('/adres', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/adres.html'));
});
app.get('/payment', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/payment.html'));
});
app.get('/layout', (req, res) => {  
  res.sendFile(path.join(__dirname, 'Kitap_Satisi/public/layout.html'));
});
app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor...`);
});
 const identitas = document.getElementById('identitas');

    fetch('./pilih-identitas.html').then(function (snap) {
      snap.text().then(function (result) {
        identitas.innerHTML = result;
      })
    })
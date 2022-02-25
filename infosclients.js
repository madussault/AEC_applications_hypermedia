    function confirmer(formulaire) {
      var nom = formulaire.nom.value;
      var prenom = formulaire.prenom.value;
      var email = formulaire.email.value
      var adresse = formulaire.adresse.value;
      var datenaissance = formulaire.datenaissance.value;
      confirm('Nom :' + nom + ' Prenom ' + prenom + 'Email:' +email +
        ' Adresse ' + adresse +
        'Date de naissance' + datenaissance + 'Confirmer Client enregistré ')
    }
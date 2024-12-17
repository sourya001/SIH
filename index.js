const villageData = {
    village1: {
      envFactor: 'Low',
      pollution: 'High',
      tax: '5%',
      health: '80%',
      literacy: '75%'
    },
    village2: {
      envFactor: 'Moderate',
      pollution: 'Medium',
      tax: '8%',
      health: '85%',
      literacy: '80%'
    },
    village3: {
      envFactor: 'High',
      pollution: 'Low',
      tax: '10%',
      health: '90%',
      literacy: '90%'
    }
  };
  
  function updateTable() {
    const villageSelect = document.getElementById('villageSelect');
    const selectedVillage = villageSelect.value;
    
    document.getElementById('envFactor').textContent = villageData[selectedVillage].envFactor;
    document.getElementById('pollution').textContent = villageData[selectedVillage].pollution;
    document.getElementById('tax').textContent = villageData[selectedVillage].tax;
    document.getElementById('health').textContent = villageData[selectedVillage].health;
    document.getElementById('literacy').textContent = villageData[selectedVillage].literacy;
  }
  
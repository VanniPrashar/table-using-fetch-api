fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        const users = data.data;

        const tableBody = document.querySelector('tbody');
        users.forEach(user => {
          const row = document.createElement('tr');
          const avatarContainer = document.createElement('td');
          const avatarImg = document.createElement('img');
          
          avatarImg.src = user.avatar;
          avatarContainer.appendChild(avatarImg);
          row.appendChild(avatarContainer);

          const firstNameContainer = document.createElement('td');
          firstNameContainer.textContent = user.first_name;
          row.appendChild(firstNameContainer);

          const lastNameContainer = document.createElement('td');
          lastNameContainer.textContent = user.last_name;
          row.appendChild(lastNameContainer);

          const emailContainer = document.createElement('td');
          emailContainer.textContent = user.email;
          row.appendChild(emailContainer);

          tableBody.appendChild(row);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
const fetchUsers = async () => {
  try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const users = await response.json()
      const userList = document.getElementById("users-list")

      users.forEach(user => {
          const userCard = document.createElement("div")
          userCard.classList.add("user-card")

          const nameElement = document.createElement("h2")
          nameElement.classList.add("user-name")
          nameElement.textContent = `Name: ${user.name}`
          userCard.appendChild(nameElement)

          const phoneElement = document.createElement("h3")
          phoneElement.classList.add("user-phone")
          phoneElement.textContent = `Phone: ${user.phone}`
          userCard.appendChild(phoneElement)

          const companyElement = document.createElement("h3")
          companyElement.classList.add("user-company")
          companyElement.textContent = `Company: ${user.company.name}`
          userCard.appendChild(companyElement)

          userList.appendChild(userCard)
      })
  } catch (error) {
      console.log(error)
  }
}


fetchUsers()
// Add your code here
function submitData(userName, userEmail) {
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body: JSON.stringify({ name : userName, email : userEmail }),
    };
    
    return (
        fetch('http://localhost:3000/users', configurationObject)
        .then((response) => response.json())
        .then((object) => {
            const body = document.querySelector('body')
            const p = document.createElement('p')
            body.append(p)
            p.textContent = object.id

        })
        .catch((error) => {
            const body = document.querySelector('body')
            const p = document.createElement('p')
            body.append(p)
            p.textContent = 'Unauthorized Access'
            //alert('Unauthorized Access');
            //console.log(error.message);
        })
    )
}
dataForm = () =>{

    
    let pessoa = {};
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('date').value;
    

    let arrBirthday = birthday.split('-');
    arrBirthday = arrBirthday.reverse().join('/');
    console.log(`Nome: ${name} \nData de Nascimento: ${arrBirthday}`);
    
    pessoa = {
        name: name,
        birthday: arrBirthday
    }
    localStorage.setItem('pessoas',JSON.stringify(pessoa));    
    
}
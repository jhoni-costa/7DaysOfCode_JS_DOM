dataForm = () =>{
    const name = document.getElementById('name').value;
    const birthday = document.getElementById('date').value;
    
    let arrBirthday = birthday.split('-');
    // console.log(arrBirthday.reverse());
    arrBirthday = arrBirthday.reverse().join('/');
    console.log(`Nome: ${name} \nData de Nascimento: ${arrBirthday}`);
    
}
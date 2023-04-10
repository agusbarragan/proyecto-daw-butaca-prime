import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

body{
    font-family: 'Poppins', sans-serif;
    background-color: #ff9d00;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;

}

.movies-content {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
}
.item-movie {
    width: 250px;
    height: 300px;
    background-size: cover;
    border-radius: 15px;
    display: flex;
    align-items: flex-end;
}
.item-movie:hover > .info {
    color: #fff;
    background-color: black;
}
.info {
    background-color: #ffffffd9;
    width: 100%;
    padding: 10px 30px;
    height: 87px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 0px 0px 15px 15px;
    transition: .7s;
}
.info p {
    margin: 0;
}
.info p span {
    text-decoration: none;
}
.info h4 {
    margin: 0 0 8px;
    line-height: 19px;
}

.row-info {
    display: flex;
    justify-content: space-between
}
.form-search {
    margin: 3% 0 5%;
    justify-content: center;
    color: white;
}
.form-search input[type="text"] {
    font-family: inherit;
    padding: 9px 17px;
    font-size: 20px;
    border-radius: 15px 0px 0px 15px;
    outline: none;
    border: 0;
}
.form-search input[type="submit"] {
    font-size: 20px;
    padding: 12px 18px;
    border-radius: 0px 15px 15px 0px;
    background-color: #000;
    color: #fff;
    border: 0;
    cursor: pointer;
}
.form-search input[type="submit"]:hover {
    background-color: #483f3f;
}



.form-search h2 {
    font-size: 50px;
}

.single-movie .single-info h2 {
    font-size: 40px;
    line-height: 42px;
    margin-top: 0;
}
.single-movie img {
    border-radius: 15px;
    object-fit: cover;
    width: 300px;
}

/* loading animation */
@keyframes spinner {
    to  {
        transform: rotate(360deg);
    }
}


p.author {
    display: flex;
    justify-content: center;
    font-variant: JIS04;
    margin-top: 3%;
    gap: 7px;
    color: #fff;
}
p.author a {
    text-decoration: none;
    font-weight: 700;
    color: #fff;
}


.divLogueo {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }

  
.divLogueo h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #ffffff;
  }

.formularioLogueo {
    display: flex;
    flex-direction: column;
}


.formularioLogueo label {
    font-size: 1.2rem;
    margin-bottom: 5px;
    color: #ffffff;
  }
  
  .formularioLogueo input {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .input-group {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  /*.formularioLogueo button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  .formularioLogueo button:hover {
    background-color: #0069d9;
  }
  
  .divLogueo button {
    background-color: transparent;
    border: none;
    color: #007bff;
    font-size: 1.1rem;
    cursor: pointer;
  }
  
  .divLogueo button:hover {
    text-decoration: none;
  }*/

  /*.divHome{ div del home home.es
    color: white;
  }*/

  /*.botonLogout{
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
  }

.botonGoogle{
    padding: 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;

}
  
.botonGoogle:hover {
    background-color: #0069d9;
  }*/



`
export const StyledApp = styled.div`

    text-align: center;
    margin: 0 8% 4%;

`

export const StyledLoading = styled.div`

    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top:  10rem;
    border-radius: 50%;
    border: 8px solid #000;
    border-top-color: #FCAF3C;
    animation: spinner .6s linear infinite;

`

export const StyledSingleMovie = styled.div`

    display: flex;
    gap: 25px;
    margin: 7% 0 3%;
    justify-content: center;

`

export const StyledSingleInfo = styled.div`

    width: 500px;
    text-align: left;
    background-color: #ffffff9e;
    padding: 13px 25px;
    border-radius: 15px;


`
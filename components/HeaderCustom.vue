<template>
    <header>
        <h1>Dinamicas<span> Digitais</span></h1>
        
    </header>
</template>



<style scoped>

    header{
        padding: 20px;
        position: fixed;
        animation: SugirCimaPraBaixo 1s ease-in-out;
        width: 100vw;
        
        backdrop-filter: blur(10px);
    }

    header h1{
        font-size: 1.2rem;
        font-weight: 600;
    }

    header h1 span{
        color:orange;
       
        
    }


    @keyframes SugirCimaPraBaixo{
            from{
               transition: ease-in-out 1s;
               transform: translateY(-100%)
            }
            to {
                transform: translateY(0);
                transition: ease-in-out 1s;
            }
    }

  

</style>
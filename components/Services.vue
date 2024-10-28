<template>

    <div class="container-services">
        <h3>nossos serviços</h3>

        <h1>
            Mais quem um simples serviço,
            uma parceria
            
        </h1>

       
            <div class="item">
                <p>Desenvolvimento de</p>
                <p> SITES</p>
                <UAccordion class="accordion"
                color="orange"
                 variant="ghost"
                size="sm"
                :items="[{ label: 'Projeto Personalizado', content: 'Projetos feitos em código, evitando que fique com cara genérica dos sites feitos com geradores ' }, { label: 'Reposivo Celular, Tablet e Computador', content: 'Seu site se adapta a tela do usuário' }, { label: 'Integração redes sociais', content: 'Seu site conentado seus clientes diretamente as suas redes socias' }, { label: 'Atualização de Conteúdo', content: 'Dependo da escolha do pacote, você poderá solicitar alterações sempre que nescessário' }]"
                 />

                 <UButton class="button" color="orange" variant="solid">Falar com consultor</UButton>
                 

            </div>

            <div class="item">
                <p>Desenvolvimento de</p>
                <p> ARTES PARA REDES SOCIAIS</p>
                <UAccordion class="accordion"
                color="orange"
                 variant="ghost"
                size="sm"
                :items="[{ label: 'Personalizado com sua identidade', content: 'Artes personalizadas com a identidade da sua marca!' }, { label: 'Compátivel com sua rede social', content: 'Enviadas em tipos compatíves com Instagram e WhatsApp' }, { label: 'Cuidados na mensagem', content: 'Transmitir uma mensagem requer cuidado, temos pessoas capacitadas para esse serviço' }, { label: 'Atualização de Conteúdo', content: 'Dependo da escolha do pacote, você poderá solicitar alterações sempre que nescessário' }]"
                 />

                 <UButton class="button" color="orange" variant="solid">Falar com consultor</UButton>
                 

            </div>

            

            
    </div>
</template>



<style scoped>

    .button{
        margin-top: 20px;
    }

    .accordion{
        margin-top: 20px;
    }
    .item p:nth-child(1){
        color: white;
        font-size: 1.2rem;
        text-align: center;
        margin-top: 20px;
    }

    .item p:nth-child(2){
        color: orange;
        font-size: 1.2rem;
        text-align: center;
        font-weight: 900;
    }


    .container-services{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    h1{
        padding: 20px;
        font-size: 2rem;
        font-weight: 600;
        font-family: Poppins;
        position: relative;
        animation: appear 1s ease-in-out;
        animation-timeline: view();
        animation-range: cover 0% cover 90%;
    }


     h3{
        margin-left: 20px;
        margin-top: 60px;
        font-family: 'Poppins';
        color: gray;
        width: 100vw;
        margin-left: 50px;
    }

   
    .item{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #1f1f1f;
        width:80vw;
        height: 370px;
        border-radius: 15px;
        box-shadow: gray 2px 2px 2px 2px;
        margin-top: 40px;
    }


    
    @keyframes SugirBaixoCima{
        
        from{
            opacity: 0;
            transform: translateY(100%);
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }



    @keyframes appear{
        from{
            opacity: 0;
            transform: translateY(100%);
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }

</style>
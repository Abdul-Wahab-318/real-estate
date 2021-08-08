
function displaySearch()
{
    document.getElementById('search').classList.toggle('hide');
    document.getElementById('search').classList.toggle('show');
    document.getElementById('searchBtn').classList.toggle('hide');
    document.getElementById('searchBtn').classList.toggle('show');
    document.querySelector('#search-link').classList.toggle('triangle');
}

function showVideo()
{
    console.log('function triggered');
    document.querySelector('#video').classList.toggle('hide');
    document.querySelector('#video').classList.toggle('show');
    document.querySelector('#black').classList.toggle('hide');
}

function stopVideo()
{
    ifrm.src="";
    ifrm.src="https://www.youtube.com/embed/9Y9wuCyMkFk";
}

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    singleItem:true,
    navText:[
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            items:1,
            dots:true,
            nav:false,
            autolay:true
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

function convertSymbol(e)
{
    console.log('converting symbol');
    var symbol=e.firstElementChild.classList;
    symbol.toggle('fa-plus');
    symbol.toggle('plus-icon');
    symbol.toggle('fa-minus');
}

function removeSymbol(e)
{
    var symbol=e.firstElementChild.classList;
    if(symbol.contains('fa-plus') && symbol.contains('plus-icon'))
    {
        console.log('not removing symbol haha')
    }
    else
    {
        console.log('removing symbol yeet');
        symbol.toggle('fa-plus');
        symbol.toggle('plus-icon');
        symbol.toggle('fa-minus');
    }

}
function scrollTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}


function reactHeart(e)
{
    var likeIcon=e.nextElementSibling;
    likeIcon.classList.toggle('like-effect');
    likeIcon.classList.toggle('d-none');
}
function unreactHeart(e)
{
    e.classList.toggle('like-effect');
    e.classList.toggle('d-none');
}


function clear()
        {
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('phone').value="";
            document.getElementById('subject').value="";
           /* document.getElementById('category').value="";*/
            document.getElementById('user-message').value="";
        }


        var user={
                'name':[],
                'email':[],
                'phone':[],
                'subject':[],
                'category':[],
                'userMessage':[],
                'show':function()
                {
                    console.log(user)

                },
                'store':function()
                {
                    console.log('pushing values');
                    user.name.push(document.getElementById('name').value);
                    user.email.push(document.getElementById('email').value);
                    user.phone.push(document.getElementById('phone').value);
                    user.subject.push(document.getElementById('subject').value);
                    /*user.category.push(document.getElementById('category').value);*/
                    user.userMessage.push(document.getElementById('user-message').value);
                }
                

            }

            function validateAll()
            {
                if(document.getElementById('name').value!="" && document.getElementById('subject').value!="" && document.getElementById('email').value!="" && document.getElementById('phone').value!="" && document.getElementById('category').value!="" && document.getElementById('user-message').value!="")
                {
                user.store();
                console.log(user);
                clear();
                }
                else{
                    alert('Complete the Form');
                }
            }


            //inject iframe
            var videoDiv=document.getElementById('video');
            var ifrm = document.createElement("iframe");
        function createIframe(){
            
            ifrm.setAttribute("src", "https://www.youtube.com/embed/9Y9wuCyMkFk");
            ifrm.style.width = "1060px";
            ifrm.style.height = "615px";
            videoDiv.appendChild(ifrm);
            console.log('creating iframe');
        }
        

//<iframe width="1060px" height="615px" id="player" src="https://www.youtube.com/embed/9Y9wuCyMkFk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
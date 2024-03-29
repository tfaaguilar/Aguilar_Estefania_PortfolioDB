<!DOCTYPE html>
<html lang="en">
<?php
    require_once('includes/connect_pdo.php');
    $stmt = $connection->prepare('SELECT * FROM projects ORDER BY title ASC');
    $stmt->execute();
?>

  <head>
    <title>EA. Works</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
    <link href="css/grid.css" rel="stylesheet" />
    <link href="css/main.css" rel="stylesheet"/>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet">
<script src="https://kit.fontawesome.com/c65e6bc5cc.js" crossorigin="anonymous"></script>
  </head>

  <body>

  <h1 class="hidden">EA. CaseStudy</h1>
    <div id="sticky-nav-con">
    <header class="grid-con" id="main-header">
    <nav id="main-nav" class="col-start-1 col-end-2 m-col-start-7 m-col-end-12">
    <h2 class="hidden">Main Navigation</h2>
      <button id="button"></button>
        <div id="burger-con">
            <ul id="burger-menu">
                <li><a href="index.html">About</a></li>
                <li><a href="index.html">Works</a></li>
                <li><a href="index.html">Contact</a></li>
                <li><a href="casestudy.html">CaseStudy</a></li>
            </ul>
        </div>  
    </nav>
    <div class="col-span-full m-col-start-1 m-col-end-4" id="logo">
        <a href="index.html">
        <img src="images/logo-EA..svg" alt="Logo">
        </a>
    </div>
</header>
</div>

  <?php

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        echo  '<section class="project-con"><h3>'.
                $row['title'].
        '</h3><a href="project_detail_pdo.php?id='.
        $row['id'].
        '"><img class="thumbnail" src="images/'.    
                $row['image_url'].   
                '" alt="Project Thumbnail"></a></section>';

        }

        $stmt = null;

    ?> 

    

  
<!-- <section id="projects" class="grid-con">
            <h2 class="hidden"></h2>
            
        <div class="project col-span-full m-col-start-1 m-col-end-7">
            <div class="hidden ptittle">Beatbuds </div>
            <img data-project="Beatbuds" src="images/beatbuds_w.jpg" class="work" alt="member1">
            </a>
        </div>

        <div class="project col-span-full m-col-start-7 m-col-end-13">
            <div class="hidden ptittle">Kavorka SkinCare </div>
            <img data-project="Kavorka" src="images/kavorka.jpg" class="work" alt="member2">
            </a>
        </div>

        <div class="project col-span-full m-col-start-1 m-col-end-7">
            <div class="hidden ptittle">Burple Sparkling water</div>
            <img data-project="Burple" src="images/burple_w.jpg" class="work" alt="member3">
            </a>
        </div>

        <div class="project col-span-full m-col-start-7 m-col-end-13">
            <div class="hidden ptittle">NFL Match</div>
            <img data-project="NFL" src="images/sports_w.jpg" class="work" alt="member4">
            </a>
        </div>

        <div class="project col-span-full m-col-start-1 m-col-end-7">
            <div class="hidden ptittle">Work Based Learning</div>
            <img data-project="WBL" src="images/wbl_w.jpg" class="work" alt="member3">
            </a>
        </div>

        <div class="project col-span-full m-col-start-7 m-col-end-13">
            <div class="hidden ptittle">Colombian Coffee</div>
            <img data-project="Coffee" src="images/coffee_w.jpg" class="work" alt="member4">
            </a>
        </div>
        </section> -->
    

     <footer id="footer-hero"> 
        <div class="grid-con">
            
            <section id="footer-contact-info" class="col-span-full m-col-start-4 m-col-end-10">
                <a href="index.html">
                    <img src="images/logo-EA..svg" alt="Logo">
                </a>
                <p>555 Comissioners Rd - Unit 454 <br>
                London, ON, 
                </p>
                
                <p>
                    Phone:+1 555-5555<br>
                    E-mail: ea@digitaldesign.com
                </p>
            </section>

            <section id="footer-book-now" class="col-span-full m-col-start-4 m-col-end-10 book-now">
                
                <div id="social-icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google-plus"></i>
                </div>
            </section>

            <div id="footer-privacy" class="col-span-full m-col-start-2 m-col-end-12 line-seperator">
                <p id="price-policy">©2023 Estefania Aguilar. All Rights Reserved. Privacy Policy</p>
            </div>
        </div>
    </footer>


   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>   
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.0/ScrollTrigger.js"></script>
    <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.0.1/model-viewer.min.js"></script>
    <script src="https://cdn.plyr.io/3.7.8/plyr.js"></script>
    <script src="js/main.js"></script> 
  </body>
</html>
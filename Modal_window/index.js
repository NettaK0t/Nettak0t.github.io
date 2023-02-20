<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Modal window</title>
  </head>
  <body>
    <button class="show-modal-window">Модальное Окно 1</button>
    <button class="show-modal-window">Модальное Окно 2</button>
    <button class="show-modal-window">Модальное Окно 3</button>

    <div class="modal-window hidden">
      <button class="close-modal-window">&times;</button>
      <h1>Модальное Окно</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate
        porta volutpat. Mauris tempor egestas fermentum. Donec et tortor in
        felis pulvinar accumsan quis at massa. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Sed fermentum dui
        sit amet lorem maximus, non feugiat eros semper. Vivamus eget dolor ut
        libero pharetra ultricies ut elementum nisl. Mauris fringilla feugiat
        ullamcorper. Nunc id tincidunt orci. Suspendisse eget sapien at turpis
        rutrum semper sed id diam. Duis scelerisque ligula nisl, vitae viverra
        nibh venenatis nec. Pellentesque nec nunc arcu. Integer mollis mi ut
        risus posuere malesuada. Aliquam rhoncus ante vitae sem aliquet, vel
        elementum ex vulputate. Nulla finibus commodo lacinia.
      </p>
    </div>
    <div class="overlay hidden"></div>

    <script src="script.js"></script>
  </body>
</html>

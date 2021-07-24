const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("Le diste clic al boton play");
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("Le diste clic al boton pausa");
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  /* $video.currentTime = $video.currentTime - 10; */
  $video.currentTime -= 10;
  console.log("Para atras 10 segundos", $video.currentTime);
}

$forward.addEventListener("click", handleForward);

function handleForward() {
  $video.currentTime = $video.currentTime + 10;
  console.log("Para adelante 10 segundos", $video.currentTime);
}

$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

const $progress = document.querySelector("#progress");
function handleLoaded() {
  $progress.max = $video.duration;
  console.log("A cargado mi video", $video.duration);
}

function handleTimeUpdate() {
  /* console.log("Hola"); */
  $progress.value = $video.currentTime; //Y vemos en cosola que va avanzando
  /* console.log("Tiempo actual", $video.currentTime); */
}
$progress.addEventListener("input", handleInput);
function handleInput() {
  $video.currentTime = $progress.value;
  console.log($progress.value);
}

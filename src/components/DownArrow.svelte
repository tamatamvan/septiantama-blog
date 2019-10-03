<style>
.heartbeat {
	animation: heartbeat 1.5s ease-in-out infinite both;
}
@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.91);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.92);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1.2);
    animation-timing-function: ease-out;
  }
}
</style>
<svg
    width="32"
    height="32"
    fill="#36393b"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    class="heartbeat"
  >
  <path
    d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z"
  />
</svg>
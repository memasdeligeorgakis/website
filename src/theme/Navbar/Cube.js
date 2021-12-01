import React from 'react'

function Cube({ className = 'text-green-600' }) {
  return (
    <svg
      className={`${className} w-6 min-w-6`}
      viewBox="0 0 32 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current"
        d="M14.623 2c-.214 0-.44.02-.708.064-.62.1-1.222.26-1.853.487-1.425.515-2.78 1.161-3.803 1.668-.432.216-.868.423-1.304.63-.712.34-1.444.691-2.153 1.07-.502.268-1.086.583-1.638.938-.58.375-.938.75-1.16 1.221-.191.4-.312.822-.397 1.146-.355 1.369-.394 2.821-.432 4.222-.035 1.361-.035 2.706-.035 4.003v2.746a1.222 1.222 0 00-.775.363 1.322 1.322 0 000 1.824c.226.236.448.475.67.714l.33.356c.066.3.339.582.569.718.07.04.14.076.214.1.338.355.673.71 1 1.078a68.237 68.237 0 012.713 3.272c.382.483.751.974 1.121 1.465.409.543.818 1.085 1.238 1.616l.039.048c.381.479.778.974 1.226 1.405.26.255.568.435.97.563.186.06.393.075.595.091l.124.012c.125.012.246.016.37.024.14.008.28.016.42.028.915.084 1.725.128 2.472.128.506 0 .997-.02 1.46-.06.84-.072 1.514-.175 2.125-.331.62-.156 1.211-.403 1.861-.687.397-.167.76-.315 1.133-.43.3-.096.603-.176.907-.256l.19-.052c.561-.156 1.122-.34 1.667-.523l.412-.135c.498-.164.915-.304 1.32-.52.786-.422 1.308-1.125 1.432-1.935.132-.87.008-1.736-.109-2.574l-.015-.124a94.56 94.56 0 01-.148-1.512 73.157 73.157 0 00-.238-2.263 34.89 34.89 0 01-.179-1.888 12.816 12.816 0 01.047-1.932c.023-.28.058-.558.09-.838.034-.28.066-.563.089-.846.058-.627.047-1.257.031-1.796-.023-.79-.124-1.584-.222-2.259-.039-.28-.086-.555-.144-.834-.082-.38-.233-.746-.393-1.117a3.53 3.53 0 00-.568-.87 5.542 5.542 0 00-.658-.631l-.086-.072c-.4-.343-.806-.674-1.214-1.006l-.284-.231c-.818-.67-1.612-1.401-2.375-2.111l-.53-.491-.462-.427c-.849-.783-1.725-1.589-2.647-2.307l-.09-.068c-.187-.144-.378-.295-.584-.419a3.945 3.945 0 00-.798-.351A3.405 3.405 0 0014.623 2z"
      />
      <path
        d="M2.554 25.689c.224.169.465.322.698.475.245.16.477.35.71.522.46.342.905.695 1.34 1.068.852.782 1.645 1.61 2.504 2.38a97.27 97.27 0 001.951 1.7c.656.558 1.362 1.06 2.018 1.614.357.338.681.695 1.026 1.048.332.342.66.68.975 1.037.133.15.25.314.366.475.157.228.365.424.585.597.477.377 1.183.468 1.773.342.407-.087.805-.252 1.191-.397.582-.22 1.155-.455 1.736-.683.622-.243 1.22-.542 1.822-.825a52.754 52.754 0 003.143-1.586c.407-.224.797-.471 1.196-.707l-.187.106c.303-.18.606-.365.913-.55-.095.06-.19.114-.286.173.324-.192.644-.396.963-.593.527-.306 1.063-.6 1.582-.923a21.942 21.942 0 001.507-1.048c.374-.279.752-.566 1.096-.876.282-.259.515-.553.606-.922.092-.354.166-.707.195-1.072.096-1.288-.137-2.576-.215-3.86-.075-1.25-.167-2.498-.22-3.747l-.026-.561c-.02-.856-.008-1.712-.033-2.568-.012-.601.017-1.198.063-1.799.054-.663.149-1.327.157-1.99.005-.44.017-.876.017-1.316.046-.46.075-.923.037-1.382-.004-.047-.02-.09-.029-.134-.004-.055 0-.11-.004-.16-.033-.319-.228-.594-.41-.849-.1-.141-.23-.263-.35-.389a8.088 8.088 0 00-.85-.718c-.482-.358-1.018-.644-1.491-1.013-.465-.358-.901-.75-1.35-1.123a19.157 19.157 0 00-1.411-1.049c-.926-.636-1.918-1.158-2.931-1.66-.316-.181-.619-.386-.934-.574-.478-.283-.972-.542-1.458-.809-.415-.224-.818-.467-1.233-.695-.236-.126-.465-.247-.722-.33-.137-.043-.278-.075-.42-.106L18.132.2a1.751 1.751 0 00-.606-.192 1.352 1.352 0 00-1.142.436c-.527.192-1.041.443-1.556.671-1.026.452-2.026.95-3.019 1.465-.548.283-1.104.557-1.669.809-.622.275-1.25.542-1.872.82-.59.264-1.146.574-1.71.884-.603.33-1.213.64-1.798 1.001a4.95 4.95 0 00-.619.448c-.274.161-.49.408-.64.683a1.987 1.987 0 00-.174.542c-.244.75-.377 1.532-.552 2.297-.091.346-.178.691-.261 1.037.029-.11.054-.22.083-.33-.137.518-.266 1.04-.395 1.563l.063-.243c-.025.09-.046.18-.07.27-.134.53-.263 1.06-.35 1.599-.1.6-.166 1.213-.236 1.822-.12 1.048-.225 2.096-.337 3.149-.054.502-.108 1.005-.157 1.512-.059.522-.125 1.048-.112 1.574.016.62.033 1.265.186 1.87.195.777.727 1.311 1.366 1.802zM16.915 4.253c.282-.146.565-.275.855-.393.282.134.565.267.847.404.802.432 1.565.931 2.321 1.434a24.638 24.638 0 012.504 1.904c.352.318.71.625 1.104.895.415.28.797.593 1.195.888.345.251.694.499 1.038.746-.157.082-.32.169-.481.243-.523.24-1.075.417-1.599.656-1.009.46-1.955 1.056-2.902 1.622-.153.09-.307.18-.456.27-.901.531-1.819 1.038-2.724 1.564-.56.326-1.108.66-1.648 1.013a1.465 1.465 0 00-.29-.063c-.042-.004-.088-.004-.13-.004-.178 0-.352.035-.514.098a13.712 13.712 0 01-.556-.235 6.595 6.595 0 01-1.047-.742c-.278-.252-.56-.495-.838-.743-.44-.4-.868-.809-1.312-1.205-.34-.303-.694-.593-1.038-.895l-.229-.205c-.427-.384-.859-.773-1.349-1.087-.361-.232-.726-.444-1.059-.707-.31-.306-.602-.632-.917-.935-.062-.063-.116-.13-.179-.192.528-.224 1.042-.471 1.561-.715 1.055-.495 2.056-1.087 3.106-1.59.51-.244 1.013-.507 1.536-.719.51-.204 1.038-.369 1.557-.557a16.59 16.59 0 001.644-.75zm11.43 22.696c-1.109.593-2.275 1.08-3.396 1.65-1.28.647-2.5 1.39-3.733 2.12-.46.27-.926.534-1.39.79-.44.239-.898.42-1.354.627a9.34 9.34 0 00-1.511.888c-.009-.145-.025-.29-.03-.436-.029-2.592.333-5.171.524-7.755.1-1.343.124-2.686.207-4.03.038-.623.104-1.248.15-1.872.02-.31.033-.62.045-.93.482-.346.968-.684 1.478-.994 1.18-.684 2.367-1.351 3.542-2.042-.037.023-.075.043-.112.067.265-.158.535-.315.801-.472.95-.557 1.897-1.107 2.931-1.52.523-.207 1.042-.415 1.536-.679.316-.168.623-.35.93-.534v.02c-.046.456-.087.911-.133 1.363-.066.695-.132 1.394-.203 2.089-.058.585-.141 1.174-.166 1.767a19.9 19.9 0 00.012 1.724c.021.636-.008 1.264-.045 1.896-.038.57-.038 1.143-.063 1.712-.05 1.053-.037 2.101-.045 3.153-.004.472.004.935.025 1.398zM5.19 18.892c.05-.59.1-1.174.124-1.767.025-.582.013-1.163.03-1.748.016-.62.02-1.24.049-1.857.033-.66.095-1.312.166-1.967.042-.373.079-.747.12-1.124.083.079.167.161.25.244.452.455.867.927 1.403 1.3.266.184.548.345.822.518.282.184.548.397.805.617.054.047.104.094.158.14.519.468 1.05.916 1.574 1.375.548.507 1.1 1.01 1.66 1.504.474.436.951.868 1.528 1.182.428.236.864.424 1.312.6-.012.256-.02.508-.037.763-.046.624-.108 1.248-.15 1.873-.083 1.343-.108 2.686-.207 4.029-.17 2.238-.457 4.476-.515 6.726-.175-.15-.345-.298-.52-.451-.672-.633-1.245-1.36-1.86-2.042-.717-.794-1.423-1.595-2.166-2.364-.78-.81-1.628-1.563-2.4-2.376a19.744 19.744 0 00-1.416-1.374c-.253-.22-.531-.413-.801-.613.05-1.06-.02-2.124.07-3.188z"
        fill="#000"
      />
    </svg>
  )
}

export default Cube

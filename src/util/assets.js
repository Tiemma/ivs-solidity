// TODO is there a better way to load SVG assets into a js bundle?

const logo = `
  <svg width="26px" height="25px" viewBox="0 0 26 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
  <title>White Logo</title>
  <desc>Created with Sketch.</desc>
  <defs>
    <polygon id="path-1" points="0 25 0 0 26 0 26 25"></polygon>
  </defs>
    <g id="Log-In-Modal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Login-Modal-Button" transform="translate(-200.000000, -174.000000)">
            <g id="White-Logo" transform="translate(200.000000, 174.000000)">
                <mask id="mask-2" fill="white">
                    <use xlink:href="#path-1"></use>
                </mask>
                <g id="Clip-2"></g>
                <path d="M18.6353725,19.7892426 C17.496124,20.2865812 15.6009523,20.6241192 13.4275837,20.663487 C13.4256766,20.6637199 13.4237695,20.6637199 13.4218624,20.6637199 C13.2840751,20.6662823 13.1455726,20.66768 13.0056398,20.66768 L12.9999185,20.66768 L12.994674,20.66768 C12.8547412,20.66768 12.7160003,20.6662823 12.578213,20.6637199 C12.5763059,20.6637199 12.5743988,20.6637199 12.5724917,20.663487 C10.3991231,20.6241192 8.50395141,20.2865812 7.36470291,19.7892426 C5.76250807,19.1973281 4.76033174,18.3566279 4.76033174,17.4232153 C4.76033174,16.2920321 6.23212923,15.2973549 8.46056509,14.7168548 C8.56426316,14.93396 8.68107249,15.1438438 8.81480725,15.3425463 C6.68840076,15.8655089 5.47549087,16.7322991 5.47549087,17.4232153 C5.47549087,17.753532 5.75201907,18.1241483 6.2728933,18.4784584 C6.55061343,17.7472425 8.20286941,17.1376242 10.4603884,16.8713675 C11.2062994,17.3023166 12.0725955,17.5543637 12.9999185,17.5543637 C13.9274799,17.5543637 14.7940144,17.3023166 15.539687,16.8713675 C17.797206,17.1376242 19.4494619,17.7472425 19.7274205,18.4784584 C20.2480563,18.1241483 20.5248229,17.753532 20.5248229,17.4232153 C20.5248229,16.7322991 19.311913,15.8655089 17.1852681,15.3425463 C17.3192413,15.1438438 17.4360506,14.93396 17.5392719,14.7168548 C19.7679461,15.2975878 21.239982,16.2920321 21.239982,17.4232153 C21.239982,18.3566279 20.2375673,19.1973281 18.6353725,19.7892426 M12.9999185,8.81168687 C15.174479,8.81168687 16.9371079,10.5340857 16.9371079,12.6587815 C16.9371079,14.7837101 15.174479,16.506109 12.9999185,16.506109 C10.8255963,16.506109 9.06296746,14.7837101 9.06296746,12.6587815 C9.06296746,10.5340857 10.8255963,8.81168687 12.9999185,8.81168687 M25.8139014,18.573966 L13.9906523,0.52954331 C13.5277059,-0.176514437 12.4721311,-0.176514437 12.0096615,0.52954331 L0.185935538,18.573966 C-0.211216167,19.1803231 0.0533927125,19.9902745 0.736846457,20.2593266 L12.560334,24.9168385 C12.8423451,25.0277205 13.1574919,25.0277205 13.4397414,24.9168385 L25.2632289,20.2593266 C25.9466827,19.9902745 26.2112915,19.1803231 25.8139014,18.573966" id="Fill-1" fill="#FFFFFF" mask="url(#mask-2)"></path>
            </g>
        </g>
    </g>
</svg>
`;

const logowithBG = `
  <svg width="48px" height="46px" viewBox="0 0 48 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
      <title>Blurple Logo</title>
      <desc>Created with Sketch.</desc>
      <defs>
          <polygon id="path-1" points="0 46 0 0 48 0 48 46"></polygon>
      </defs>
      <g id="Log-In-Modal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Login-Modal-QR" transform="translate(-277.000000, -63.000000)">
              <g id="Blurple-Logo" transform="translate(277.000000, 63.000000)">
                  <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                  </mask>
                  <g id="Clip-2"></g>
                  <path d="M34.4037645,36.4122063 C32.3005365,37.3273094 28.801758,37.9483793 24.7893852,38.020816 C24.7858644,38.0212446 24.7823436,38.0212446 24.7788229,38.0212446 C24.5244462,38.0259594 24.2687494,38.0285312 24.0104119,38.0285312 L23.9998495,38.0285312 L23.9901674,38.0285312 C23.7318299,38.0285312 23.4756929,38.0259594 23.2213163,38.0212446 C23.2177955,38.0212446 23.2142747,38.0212446 23.2107539,38.020816 C19.1983811,37.9483793 15.6996026,37.3273094 13.5963746,36.4122063 C10.6384764,35.3230837 8.78830475,33.7761953 8.78830475,32.0587162 C8.78830475,29.9773391 11.5054694,28.147133 15.6195048,27.0790128 C15.8109474,27.4784863 16.0265954,27.8646727 16.2734903,28.2302852 C12.3478168,29.1925364 10.1085985,30.7874303 10.1085985,32.0587162 C10.1085985,32.6664989 10.6191121,33.3484329 11.5807261,34.0003634 C12.0934402,32.6549262 15.1437589,31.5332285 19.3114863,31.0433162 C20.6885527,31.8362626 22.2878686,32.3000291 23.9998495,32.3000291 C25.7122706,32.3000291 27.3120265,31.8362626 28.6886528,31.0433162 C32.8563802,31.5332285 35.906699,32.6549262 36.4198531,34.0003634 C37.381027,33.3484329 37.8919807,32.6664989 37.8919807,32.0587162 C37.8919807,30.7874303 35.6527625,29.1925364 31.7266488,28.2302852 C31.9739839,27.8646727 32.1896319,27.4784863 32.3801943,27.0790128 C36.4946698,28.1475616 39.2122745,29.9773391 39.2122745,32.0587162 C39.2122745,33.7761953 37.3616627,35.3230837 34.4037645,36.4122063 M23.9998495,16.2135038 C28.0144228,16.2135038 31.2685069,19.3827178 31.2685069,23.2921579 C31.2685069,27.2020266 28.0144228,30.3712406 23.9998495,30.3712406 C19.9857163,30.3712406 16.7316322,27.2020266 16.7316322,23.2921579 C16.7316322,19.3827178 19.9857163,16.2135038 23.9998495,16.2135038 M47.6564334,34.1760975 L25.8288965,0.974359691 C24.9742263,-0.324786564 23.0254727,-0.324786564 22.1716827,0.974359691 L0.343265609,34.1760975 C-0.389937538,35.2917945 0.0985711616,36.7821051 1.36033192,37.2771609 L23.1883089,45.8469828 C23.7089448,46.0510057 24.2907542,46.0510057 24.8118302,45.8469828 L46.6398072,37.2771609 C47.901568,36.7821051 48.3900767,35.2917945 47.6564334,34.1760975" id="Fill-1" fill="#5C50CA" mask="url(#mask-2)"></path>
              </g>
          </g>
      </g>
  </svg>
`;

const appleApp = `
  <svg width="129px" height="40px" viewBox="0 0 129 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
    <title>app-store-badge</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Log-In-Modal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Login-Modal-Button" transform="translate(-170.000000, -319.000000)" fill-rule="nonzero">
        <g id="app-store-badge" transform="translate(170.000000, 319.000000)">
          <path d="M124.2,40 L4.2,40 C2,40 0.2,38.2 0.2,36 L0.2,4 C0.2,1.8 2,0 4.2,0 L124.2,0 C126.4,0 128.2,1.8 128.2,4 L128.2,36 C128.2,38.2 126.4,40 124.2,40 Z" id="Shape" fill="#000000"></path>
          <path d="M27.2,19.8 C27.2,16.7 29.8,15.2 29.9,15.1 C28.4,13 26.2,12.7 25.4,12.6 C23.5,12.4 21.6,13.7 20.7,13.7 C19.7,13.7 18.2,12.6 16.6,12.6 C14.5,12.6 12.6,13.8 11.5,15.7 C9.3,19.5 10.9,25.1 13,28.2 C14.1,29.7 15.3,31.4 16.9,31.3 C18.5,31.2 19.1,30.3 21,30.3 C22.9,30.3 23.4,31.3 25.1,31.3 C26.8,31.3 27.9,29.8 28.9,28.3 C30.1,26.6 30.6,24.9 30.6,24.8 C30.5,24.7 27.2,23.5 27.2,19.8 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M24.1,10.6 C24.9,9.5 25.5,8.1 25.4,6.6 C24.2,6.7 22.6,7.4 21.8,8.5 C21,9.4 20.3,10.9 20.5,12.3 C21.8,12.4 23.2,11.6 24.1,10.6 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M50,31.1 L47.8,31.1 L46.6,27.3 L42.4,27.3 L41.3,31.1 L39.2,31.1 L43.4,18.2 L46,18.2 L50,31.1 Z M46.2,25.7 L45.1,22.3 C45,22 44.8,21.1 44.4,19.9 L44.4,19.9 C44.3,20.4 44.1,21.3 43.8,22.3 L42.7,25.7 L46.2,25.7 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M60.7,26.4 C60.7,28 60.3,29.2 59.4,30.2 C58.6,31 57.7,31.4 56.5,31.4 C55.3,31.4 54.4,31 53.9,30.1 L53.9,30.1 L53.9,35 L51.8,35 L51.8,25 C51.8,24 51.8,23 51.7,21.9 L53.5,21.9 L53.6,23.4 L53.6,23.4 C54.3,22.3 55.3,21.7 56.7,21.7 C57.8,21.7 58.7,22.1 59.4,23 C60.3,23.8 60.7,24.9 60.7,26.4 Z M58.6,26.4 C58.6,25.5 58.4,24.7 58,24.2 C57.6,23.6 57,23.3 56.2,23.3 C55.7,23.3 55.2,23.5 54.8,23.8 C54.4,24.1 54.1,24.6 54,25.1 C53.9,25.4 53.9,25.6 53.9,25.7 L53.9,27.3 C53.9,28 54.1,28.5 54.5,29 C54.9,29.5 55.5,29.7 56.1,29.7 C56.9,29.7 57.5,29.4 57.9,28.8 C58.4,28.2 58.6,27.4 58.6,26.4 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M71.4,26.4 C71.4,28 71,29.2 70.1,30.2 C69.3,31 68.4,31.4 67.2,31.4 C66,31.4 65.1,31 64.6,30.1 L64.6,30.1 L64.6,35 L62.5,35 L62.5,25 C62.5,24 62.5,23 62.4,21.9 L64.2,21.9 L64.3,23.4 L64.3,23.4 C65,22.3 66,21.7 67.4,21.7 C68.5,21.7 69.4,22.1 70.1,23 C71,23.8 71.4,24.9 71.4,26.4 Z M69.3,26.4 C69.3,25.5 69.1,24.7 68.7,24.2 C68.3,23.6 67.7,23.3 66.9,23.3 C66.4,23.3 65.9,23.5 65.5,23.8 C65.1,24.1 64.8,24.6 64.7,25.1 C64.6,25.4 64.6,25.6 64.6,25.7 L64.6,27.3 C64.6,28 64.8,28.5 65.2,29 C65.6,29.5 66.2,29.7 66.8,29.7 C67.6,29.7 68.2,29.4 68.6,28.8 C69.1,28.2 69.3,27.4 69.3,26.4 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M83.4,27.5 C83.4,28.6 83,29.5 82.3,30.2 C81.5,31 80.3,31.3 78.8,31.3 C77.4,31.3 76.3,31 75.5,30.5 L76,28.8 C76.9,29.3 77.9,29.6 79,29.6 C79.8,29.6 80.4,29.4 80.8,29.1 C81.2,28.7 81.4,28.3 81.4,27.7 C81.4,27.2 81.2,26.7 80.9,26.4 C80.5,26 79.9,25.7 79.1,25.4 C76.8,24.6 75.7,23.3 75.7,21.7 C75.7,20.6 76.1,19.8 76.9,19.1 C77.7,18.4 78.7,18.1 80.1,18.1 C81.3,18.1 82.2,18.3 83,18.7 L82.5,20.4 C81.8,20 81,19.8 80,19.8 C79.3,19.8 78.7,20 78.3,20.3 C78,20.6 77.8,21 77.8,21.5 C77.8,22 78,22.4 78.4,22.8 C78.7,23.1 79.4,23.4 80.3,23.8 C81.4,24.2 82.2,24.8 82.8,25.4 C83.1,25.9 83.4,26.6 83.4,27.5 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M90.2,23.4 L87.9,23.4 L87.9,27.9 C87.9,29 88.3,29.6 89.1,29.6 C89.5,29.6 89.8,29.6 90,29.5 L90.1,31.1 C89.7,31.3 89.2,31.3 88.5,31.3 C87.7,31.3 87,31.1 86.6,30.6 C86.1,30.1 85.9,29.3 85.9,28.1 L85.9,23.4 L84.5,23.4 L84.5,21.8 L85.9,21.8 L85.9,20.1 L87.9,19.5 L87.9,21.8 L90.2,21.8 L90.2,23.4 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M100.5,26.4 C100.5,27.8 100.1,29 99.3,29.9 C98.4,30.8 97.3,31.3 95.9,31.3 C94.5,31.3 93.4,30.8 92.6,29.9 C91.8,29 91.4,27.9 91.4,26.5 C91.4,25.1 91.8,23.9 92.7,23 C93.5,22.1 94.7,21.6 96.1,21.6 C97.5,21.6 98.6,22.1 99.4,23 C100.1,23.9 100.5,25 100.5,26.4 Z M98.3,26.5 C98.3,25.6 98.1,24.9 97.7,24.3 C97.3,23.6 96.6,23.2 95.8,23.2 C95,23.2 94.3,23.6 93.9,24.3 C93.5,24.9 93.3,25.7 93.3,26.5 C93.3,27.4 93.5,28.1 93.9,28.7 C94.3,29.4 95,29.8 95.8,29.8 C96.6,29.8 97.2,29.4 97.7,28.7 C98.1,28.1 98.3,27.3 98.3,26.5 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M107.2,23.6 C107,23.6 106.8,23.5 106.5,23.5 C105.8,23.5 105.2,23.8 104.8,24.3 C104.5,24.8 104.3,25.4 104.3,26.1 L104.3,31 L102.2,31 L102.2,24.6 C102.2,23.5 102.2,22.6 102.1,21.7 L103.9,21.7 L104,23.5 L104.1,23.5 C104.3,22.9 104.7,22.4 105.1,22 C105.6,21.7 106.1,21.5 106.6,21.5 C106.8,21.5 107,21.5 107.1,21.5 L107.1,23.6 L107.2,23.6 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M116.4,26 C116.4,26.4 116.4,26.7 116.3,26.9 L110.1,26.9 C110.1,27.8 110.4,28.5 111,29 C111.5,29.4 112.2,29.7 113,29.7 C113.9,29.7 114.8,29.6 115.5,29.3 L115.8,30.7 C114.9,31.1 113.9,31.3 112.7,31.3 C111.3,31.3 110.1,30.9 109.3,30 C108.5,29.2 108.1,28 108.1,26.6 C108.1,25.2 108.5,24 109.2,23.1 C110,22.1 111.1,21.6 112.5,21.6 C113.8,21.6 114.9,22.1 115.5,23.1 C116.2,23.9 116.4,24.9 116.4,26 Z M114.5,25.5 C114.5,24.9 114.4,24.4 114.1,23.9 C113.7,23.3 113.2,23 112.5,23 C111.8,23 111.3,23.3 110.9,23.8 C110.6,24.2 110.4,24.8 110.3,25.4 L114.5,25.4 L114.5,25.5 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M45.6,10.3 C45.6,11.4 45.3,12.3 44.6,12.9 C44,13.4 43.1,13.7 41.9,13.7 C41.3,13.7 40.8,13.7 40.4,13.6 L40.4,7.4 C40.9,7.3 41.5,7.3 42.2,7.3 C43.3,7.3 44.1,7.5 44.7,8 C45.2,8.5 45.6,9.3 45.6,10.3 Z M44.5,10.3 C44.5,9.6 44.3,9 43.9,8.6 C43.5,8.2 42.9,8 42.2,8 C41.9,8 41.6,8 41.4,8.1 L41.4,12.8 C41.5,12.8 41.8,12.8 42.1,12.8 C42.9,12.8 43.5,12.6 43.9,12.2 C44.3,11.8 44.5,11.1 44.5,10.3 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M51.2,11.3 C51.2,12 51,12.6 50.6,13 C50.2,13.5 49.6,13.7 48.9,13.7 C48.2,13.7 47.7,13.5 47.3,13 C46.9,12.6 46.7,12 46.7,11.3 C46.7,10.6 46.9,10 47.3,9.6 C47.7,9.1 48.3,8.9 49,8.9 C49.7,8.9 50.2,9.1 50.6,9.6 C51,10 51.2,10.6 51.2,11.3 Z M50.2,11.3 C50.2,10.9 50.1,10.5 49.9,10.2 C49.7,9.8 49.4,9.7 49,9.7 C48.6,9.7 48.3,9.9 48.1,10.2 C47.9,10.5 47.8,10.9 47.8,11.3 C47.8,11.7 47.9,12.1 48.1,12.4 C48.3,12.8 48.6,12.9 49,12.9 C49.4,12.9 49.7,12.7 49.9,12.3 C50.1,12.1 50.2,11.7 50.2,11.3 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M58.9,9 L57.5,13.6 L56.6,13.6 L56,11.6 C55.8,11.1 55.7,10.6 55.6,10.1 L55.6,10.1 C55.5,10.6 55.4,11.1 55.2,11.6 L54.6,13.6 L53.7,13.6 L52.2,9 L53.2,9 L53.7,11.2 C53.8,11.7 53.9,12.2 54,12.7 L54,12.7 C54.1,12.3 54.2,11.8 54.4,11.2 L55,9 L55.8,9 L56.4,11.1 C56.6,11.6 56.7,12.1 56.8,12.6 L56.8,12.6 C56.9,12.1 57,11.6 57.1,11.1 L57.7,9 L58.9,9 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M64.1,13.6 L63.1,13.6 L63.1,11 C63.1,10.2 62.8,9.8 62.2,9.8 C61.9,9.8 61.7,9.9 61.5,10.1 C61.3,10.3 61.2,10.6 61.2,10.9 L61.2,13.6 L60.2,13.6 L60.2,10.3 C60.2,9.9 60.2,9.5 60.2,9 L61.1,9 L61.1,9.7 L61.1,9.7 C61.2,9.5 61.4,9.3 61.6,9.1 C61.9,8.9 62.2,8.8 62.5,8.8 C62.9,8.8 63.3,8.9 63.6,9.2 C64,9.5 64.1,10 64.1,10.7 L64.1,13.6 Z" id="Shape" fill="#FFFFFF"></path>
          <polygon id="Shape" fill="#FFFFFF" points="66.9 13.6 65.9 13.6 65.9 6.9 66.9 6.9"></polygon>
          <path d="M72.9,11.3 C72.9,12 72.7,12.6 72.3,13 C71.9,13.5 71.3,13.7 70.6,13.7 C69.9,13.7 69.4,13.5 69,13 C68.6,12.6 68.4,12 68.4,11.3 C68.4,10.6 68.6,10 69,9.6 C69.4,9.2 70,8.9 70.7,8.9 C71.4,8.9 71.9,9.1 72.3,9.6 C72.7,10 72.9,10.6 72.9,11.3 Z M71.9,11.3 C71.9,10.9 71.8,10.5 71.6,10.2 C71.4,9.8 71.1,9.7 70.7,9.7 C70.3,9.7 70,9.9 69.8,10.2 C69.6,10.5 69.5,10.9 69.5,11.3 C69.5,11.7 69.6,12.1 69.8,12.4 C70,12.8 70.3,12.9 70.7,12.9 C71.1,12.9 71.4,12.7 71.6,12.3 C71.8,12.1 71.9,11.7 71.9,11.3 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M77.8,13.6 L76.9,13.6 L76.8,13.1 L76.8,13.1 C76.5,13.5 76,13.7 75.5,13.7 C75.1,13.7 74.7,13.6 74.5,13.3 C74.3,13 74.1,12.7 74.1,12.4 C74.1,11.8 74.3,11.4 74.8,11.1 C75.3,10.8 75.9,10.7 76.8,10.7 L76.8,10.6 C76.8,10 76.5,9.7 75.9,9.7 C75.4,9.7 75.1,9.8 74.7,10 L74.5,9.3 C74.9,9 75.4,8.9 76.1,8.9 C77.3,8.9 77.9,9.5 77.9,10.8 L77.9,12.5 C77.8,13 77.8,13.3 77.8,13.6 Z M76.8,12 L76.8,11.3 C75.7,11.3 75.1,11.6 75.1,12.2 C75.1,12.4 75.2,12.6 75.3,12.7 C75.4,12.8 75.6,12.9 75.8,12.9 C76,12.9 76.2,12.8 76.4,12.7 C76.6,12.6 76.7,12.4 76.8,12.2 C76.8,12.2 76.8,12.1 76.8,12 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M83.6,13.6 L82.7,13.6 L82.7,12.9 L82.7,12.9 C82.4,13.5 81.9,13.7 81.2,13.7 C80.6,13.7 80.2,13.5 79.8,13.1 C79.4,12.7 79.3,12.1 79.3,11.4 C79.3,10.7 79.5,10.1 79.9,9.6 C80.3,9.2 80.8,9 81.3,9 C81.9,9 82.3,9.2 82.6,9.6 L82.6,9.6 L82.6,7 L83.6,7 L83.6,12.4 C83.6,12.8 83.6,13.2 83.6,13.6 Z M82.6,11.7 L82.6,10.9 C82.6,10.8 82.6,10.7 82.6,10.6 C82.5,10.4 82.4,10.2 82.2,10 C82,9.8 81.8,9.8 81.5,9.8 C81.1,9.8 80.8,10 80.6,10.3 C80.4,10.6 80.3,11 80.3,11.5 C80.3,12 80.4,12.3 80.6,12.6 C80.8,12.9 81.1,13.1 81.5,13.1 C81.8,13.1 82.1,13 82.3,12.7 C82.5,12.3 82.6,12 82.6,11.7 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M92.3,11.3 C92.3,12 92.1,12.6 91.7,13 C91.3,13.5 90.7,13.7 90,13.7 C89.3,13.7 88.8,13.5 88.4,13 C88,12.6 87.8,12 87.8,11.3 C87.8,10.6 88,10 88.4,9.6 C88.8,9.1 89.4,8.9 90.1,8.9 C90.8,8.9 91.3,9.1 91.7,9.6 C92.1,10 92.3,10.6 92.3,11.3 Z M91.2,11.3 C91.2,10.9 91.1,10.5 90.9,10.2 C90.7,9.8 90.4,9.7 90,9.7 C89.6,9.7 89.3,9.9 89.1,10.2 C88.9,10.5 88.8,10.9 88.8,11.3 C88.8,11.7 88.9,12.1 89.1,12.4 C89.3,12.8 89.6,12.9 90,12.9 C90.4,12.9 90.7,12.7 90.9,12.3 C91.1,12.1 91.2,11.7 91.2,11.3 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M97.8,13.6 L96.8,13.6 L96.8,11 C96.8,10.2 96.5,9.8 95.9,9.8 C95.6,9.8 95.4,9.9 95.2,10.1 C95,10.3 94.9,10.6 94.9,10.9 L94.9,13.6 L93.9,13.6 L93.9,10.3 C93.9,9.9 93.9,9.5 93.9,9 L94.8,9 L94.8,9.7 L94.8,9.7 C94.9,9.5 95.1,9.3 95.3,9.1 C95.6,8.9 95.9,8.8 96.2,8.8 C96.6,8.8 97,8.9 97.3,9.2 C97.7,9.5 97.8,10 97.8,10.7 L97.8,13.6 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M104.6,9.8 L103.5,9.8 L103.5,12 C103.5,12.6 103.7,12.8 104.1,12.8 C104.3,12.8 104.4,12.8 104.6,12.8 L104.6,13.6 C104.4,13.7 104.1,13.7 103.8,13.7 C103.4,13.7 103.1,13.6 102.9,13.3 C102.7,13.1 102.6,12.6 102.6,12.1 L102.6,9.8 L101.9,9.8 L101.9,9 L102.6,9 L102.6,8.2 L103.6,7.9 L103.6,9 L104.7,9 L104.7,9.8 L104.6,9.8 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M110,13.6 L109,13.6 L109,11 C109,10.2 108.7,9.8 108.1,9.8 C107.6,9.8 107.3,10 107.1,10.5 C107.1,10.6 107.1,10.7 107.1,10.9 L107.1,13.6 L106.1,13.6 L106.1,6.9 L107.1,6.9 L107.1,9.7 L107.1,9.7 C107.4,9.2 107.9,8.9 108.5,8.9 C108.9,8.9 109.3,9 109.5,9.3 C109.8,9.6 110,10.2 110,10.8 L110,13.6 Z" id="Shape" fill="#FFFFFF"></path>
          <path d="M115.5,11.1 C115.5,11.3 115.5,11.4 115.5,11.6 L112.5,11.6 C112.5,12.1 112.7,12.4 112.9,12.6 C113.2,12.8 113.5,12.9 113.9,12.9 C114.4,12.9 114.8,12.8 115.1,12.7 L115.3,13.4 C114.9,13.6 114.4,13.7 113.8,13.7 C113.1,13.7 112.5,13.5 112.1,13.1 C111.7,12.7 111.5,12.1 111.5,11.4 C111.5,10.7 111.7,10.1 112.1,9.7 C112.5,9.2 113,9 113.7,9 C114.4,9 114.9,9.2 115.2,9.7 C115.4,10 115.5,10.5 115.5,11.1 Z M114.6,10.8 C114.6,10.5 114.5,10.2 114.4,10 C114.2,9.7 114,9.6 113.6,9.6 C113.3,9.6 113,9.7 112.8,10 C112.6,10.2 112.5,10.5 112.5,10.8 L114.6,10.8 Z" id="Shape" fill="#FFFFFF"></path>
        </g>
      </g>
    </g>
  </svg>
`;
const androidApp = `
  <svg width="129px" height="41px" viewBox="0 0 129 41" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
    <title>google-play-badge</title>
    <desc>Created with Sketch.</desc>
    <defs>
        <linearGradient x1="29.5315068%" y1="-6.0957265%" x2="55.0940639%" y2="92.1559829%" id="linearGradient-1">
            <stop stop-color="#006884" offset="0%"></stop>
            <stop stop-color="#8AD1D0" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-7.52792208%" y1="15.7589744%" x2="91.537013%" y2="86.2504274%" id="linearGradient-2">
            <stop stop-color="#24BBB6" offset="0%"></stop>
            <stop stop-color="#DBE692" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="49.9404255%" y1="105.754795%" x2="49.9404255%" y2="-3.12739726%" id="linearGradient-3">
            <stop stop-color="#FCC072" offset="0%"></stop>
            <stop stop-color="#F58A5B" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="11.1493421%" y1="117.837069%" x2="90.4368421%" y2="12.1025862%" id="linearGradient-4">
            <stop stop-color="#712B8F" offset="0%"></stop>
            <stop stop-color="#EA1D27" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="Log-In-Modal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Login-Modal-Button" transform="translate(-308.000000, -318.000000)">
        <g id="google-play-badge" transform="translate(308.000000, 318.000000)">
            <path d="M124.5,40.5 L4.5,40.5 C2.3,40.5 0.5,38.7 0.5,36.5 L0.5,4.5 C0.5,2.3 2.3,0.5 4.5,0.5 L124.5,0.5 C126.7,0.5 128.5,2.3 128.5,4.5 L128.5,36.5 C128.5,38.7 126.7,40.5 124.5,40.5 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path>
            <path d="M10.3,20.1 L10.3,9.6 C10.3,9 10.8,8.5 11.3,8.5 C11.8,8.5 12,8.6 12.3,8.8 L31.6,19.4 C32,19.6 32.2,19.9 32.2,20.2 C32.2,20.5 32,20.8 31.6,21 L12.3,31.6 C12.1,31.7 11.8,31.9 11.3,31.9 C10.8,31.9 10.3,31.4 10.3,30.8 L10.3,20.1 Z" id="Shape" fill="url(#linearGradient-1)"></path>
            <path d="M22.8,20.2 L11.1,8.5 C11.2,8.5 11.2,8.5 11.3,8.5 C11.8,8.5 12,8.6 12.3,8.8 L26.5,16.6 L22.8,20.2 Z" id="Shape" fill="url(#linearGradient-2)"></path>
            <path d="M26.4,23.7 L22.8,20.1 L26.5,16.4 L31.6,19.2 C32,19.4 32.2,19.7 32.2,20 C32.2,20.3 32,20.6 31.6,20.8 L26.4,23.7 Z" id="Shape" fill="url(#linearGradient-3)"></path>
            <path d="M11.2,31.7 L11.2,31.7 L22.8,20.1 L26.4,23.7 L12.3,31.4 C12,31.6 11.8,31.7 11.2,31.7 C11.3,31.7 11.3,31.7 11.2,31.7 Z" id="Shape" fill="url(#linearGradient-4)"></path>
            <path d="M71.6,34.4 C71.1,34 70.7,33.3 70.5,32.9 L72.1,32.2 C72.2,32.4 72.4,32.7 72.6,33 C73,33.4 73.6,33.8 74.2,33.8 C74.8,33.8 75.5,33.5 75.9,33 C76.2,32.5 76.4,32 76.4,31.3 L76.4,30.7 C75.2,32.2 72.7,32 71.3,30.4 C69.8,28.8 69.8,26.1 71.3,24.5 C72.8,23 75,22.8 76.3,24.2 C76.3,24.2 76.3,24.2 76.3,24.2 L76.3,23.5 L78,23.5 L78,31 C78,32.9 77.3,34 76.4,34.7 C75.8,35.2 74.9,35.4 74.1,35.4 C73.2,35.3 72.3,35 71.6,34.4 L71.6,34.4 Z M113.5,34.8 L113.5,34.8 L115.2,30.8 L112.2,23.9 L113.9,23.9 L116,28.8 L118.1,23.9 L119.8,23.9 L115.2,34.8 L113.5,34.8 L113.5,34.8 Z M105.4,31 L105.4,31 C104.9,30.5 104.7,29.8 104.7,29.1 C104.7,28.5 104.9,27.9 105.3,27.5 C106,26.8 107,26.5 108.1,26.5 C108.8,26.5 109.4,26.6 109.9,26.9 C109.9,25.7 108.9,25.2 108.1,25.2 C107.4,25.2 106.7,25.6 106.4,26.3 L104.9,25.7 C105.2,25 106,23.7 108,23.7 C109,23.7 110,24 110.6,24.7 C111.2,25.4 111.4,26.2 111.4,27.3 L111.4,31.5 L109.7,31.5 L109.7,30.8 C109.5,31.1 109.1,31.3 108.8,31.5 C108.4,31.7 107.9,31.8 107.4,31.8 C106.8,31.7 105.9,31.5 105.4,31 L105.4,31 Z M52.1,27.4 L52.1,27.4 C52.1,25.4 53.6,23.2 56.3,23.2 C58.9,23.2 60.5,25.4 60.5,27.4 C60.5,29.4 59,31.6 56.3,31.6 C53.6,31.6 52.1,29.4 52.1,27.4 L52.1,27.4 Z M61.1,27.4 L61.1,27.4 C61.1,25.4 62.6,23.2 65.3,23.2 C67.9,23.2 69.5,25.4 69.5,27.4 C69.5,29.4 68,31.6 65.3,31.6 C62.7,31.6 61.1,29.4 61.1,27.4 L61.1,27.4 Z M40.8,29.6 L40.8,29.6 C38.3,27.1 38.4,23 40.9,20.4 C42.2,19.1 43.8,18.5 45.5,18.5 C47.1,18.5 48.7,19.1 49.9,20.3 L48.7,21.6 C46.9,19.8 44,19.9 42.3,21.7 C40.5,23.6 40.5,26.5 42.3,28.4 C44.1,30.3 47.1,30.4 48.9,28.5 C49.5,27.9 49.7,27.1 49.8,26.3 L45.6,26.3 L45.6,24.5 L51.5,24.5 C51.6,24.9 51.6,25.4 51.6,25.9 C51.6,27.4 51,28.9 50,29.9 C48.9,31 47.3,31.6 45.7,31.6 C43.9,31.5 42.1,30.9 40.8,29.6 L40.8,29.6 Z M83.1,30.3 L83.1,30.3 C81.6,28.7 81.6,26 83.1,24.3 C84.6,22.7 87.1,22.7 88.5,24.3 C89,24.8 89.3,25.5 89.6,26.2 L84.1,28.5 C84.4,29.2 85.1,29.8 86.1,29.8 C87,29.8 87.6,29.5 88.2,28.6 L89.7,29.6 L89.7,29.6 C89.5,29.8 89.3,30 89.2,30.2 C87.5,31.9 84.6,31.9 83.1,30.3 L83.1,30.3 Z M93.5,31.5 L93.5,31.5 L93.5,20.4 L97.1,20.4 C99.2,20.4 100.9,21.9 100.9,23.7 C100.9,25.5 99.4,27 97.5,27 L95.3,27 L95.3,31.4 L93.5,31.4 L93.5,31.5 Z M101.9,31.5 L101.9,31.5 L101.9,20.4 L103.6,20.4 L103.6,31.5 L101.9,31.5 L101.9,31.5 Z M79.3,31.3 L79.3,31.3 L79.3,18.9 L81.1,18.9 L81.1,31.3 L79.3,31.3 L79.3,31.3 Z M109.8,28.2 L109.8,28.2 C109.4,27.9 108.8,27.8 108.2,27.8 C107,27.8 106.3,28.4 106.3,29.1 C106.3,29.8 107,30.2 107.7,30.2 C108.7,30.2 109.8,29.4 109.8,28.2 L109.8,28.2 Z M58.6,27.4 L58.6,27.4 C58.6,26.2 57.8,24.9 56.3,24.9 C54.8,24.9 54,26.2 54,27.4 C54,28.6 54.8,29.9 56.3,29.9 C57.7,29.9 58.6,28.6 58.6,27.4 L58.6,27.4 Z M67.6,27.4 L67.6,27.4 C67.6,26.2 66.8,24.9 65.3,24.9 C63.8,24.9 63,26.2 63,27.4 C63,28.6 63.8,29.9 65.3,29.9 C66.8,29.9 67.6,28.6 67.6,27.4 L67.6,27.4 Z M76.5,28.1 L76.5,28.1 C76.5,28 76.5,27.9 76.6,27.8 C76.6,27.8 76.6,27.8 76.6,27.8 C76.6,27.7 76.6,27.5 76.6,27.4 C76.6,27.3 76.6,27.1 76.6,27 C76.6,27 76.6,26.9 76.6,26.9 C76.6,26.8 76.5,26.6 76.5,26.5 C76.2,25.5 75.3,24.8 74.4,24.8 C73.2,24.8 72.2,26 72.2,27.3 C72.2,28.7 73.2,29.8 74.5,29.8 C75.3,29.9 76.1,29.2 76.5,28.1 L76.5,28.1 Z M83.8,27.2 L83.8,27.2 L87.5,25.6 C87.1,24.9 86.5,24.7 86,24.7 C84.5,24.8 83.6,26.4 83.8,27.2 L83.8,27.2 Z M99.1,23.8 L99.1,23.8 C99.1,22.8 98.3,22.1 97.2,22.1 L95.2,22.1 L95.2,25.6 L97.3,25.6 C98.3,25.6 99.1,24.8 99.1,23.8 Z" id="Shape" fill="#FFFFFF"></path>
            <polygon id="Shape" fill="#FFFFFF" points="114.8 32.8 114.8 32.8 114.7 32.8 114.7 32.8 114.7 32.7 114.7 32.7 114.8 32.7 114.8 32.7 114.7 32.7 114.7 32.7 114.7 32.8 114.7 32.8"></polygon>
            <path d="M114.8,32.8 L114.8,32.8 C114.8,32.7 114.8,32.7 114.8,32.8 L114.8,32.8 C114.8,32.7 114.8,32.7 114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 Z" id="Shape" fill="#FFFFFF"></path>
            <polygon id="Shape" fill="#FFFFFF" points="114.8 32.8 114.8 32.8 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.8"></polygon>
            <polygon id="Shape" fill="#FFFFFF" points="114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.8 114.8 32.8 114.8 32.7"></polygon>
            <polygon id="Shape" fill="#FFFFFF" points="114.8 32.8 114.8 32.8 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.7 114.8 32.8"></polygon>
            <path d="M114.8,32.8 L114.8,32.8 C114.8,32.7 114.8,32.7 114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 C114.8,32.8 114.8,32.8 114.8,32.8 L114.8,32.8 Z M114.8,32.8 L114.8,32.8 C114.8,32.8 114.8,32.8 114.8,32.8 L114.8,32.8 L114.8,32.8 L114.8,32.8 C114.8,32.7 114.8,32.7 114.8,32.8 L114.8,32.8 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M114.9,32.8 L114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 L114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 L114.9,32.8 L114.9,32.8 L114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 L114.9,32.8 Z M114.9,32.8 L114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 L114.9,32.8 L114.9,32.8 L114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 L114.9,32.8 Z" id="Shape" fill="#FFFFFF"></path>
            <polygon id="Shape" fill="#FFFFFF" points="114.9 32.7 114.9 32.7 114.9 32.7 114.9 32.7 114.9 32.7 114.9 32.7 114.9 32.7 114.9 32.7 114.9 32.8 114.9 32.8"></polygon>
            <polygon id="Shape" fill="#FFFFFF" points="114.9 32.8 114.9 32.8 114.9 32.7 114.9 32.7 114.9 32.8"></polygon>
            <path d="M114.9,32.8 L114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 L114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 L114.9,32.8 Z M114.9,32.7 L114.9,32.7 C114.9,32.8 114.9,32.8 114.9,32.7 C114.9,32.8 114.9,32.8 114.9,32.7 L114.9,32.7 C114.9,32.7 114.9,32.7 114.9,32.7 C114.9,32.7 114.9,32.7 114.9,32.7 L114.9,32.7 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M114.9,32.8 L114.9,32.8 L114.9,32.8 L114.9,32.8 L114.9,32.8 L114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 L114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 L114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 C114.9,32.7 114.9,32.7 114.9,32.8 L114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 C114.9,32.8 114.9,32.8 114.9,32.8 L114.9,32.8 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M115,32.8 L115,32.8 C115,32.7 115,32.7 115,32.8 C114.9,32.7 114.9,32.7 115,32.8 L115,32.8 C114.9,32.8 114.9,32.8 115,32.8 C115,32.8 115,32.8 115,32.8 L115,32.8 Z M115,32.7 L115,32.7 C115,32.8 115,32.8 115,32.7 C115,32.8 114.9,32.8 115,32.7 L115,32.7 C114.9,32.7 115,32.7 115,32.7 C115,32.7 115,32.7 115,32.7 L115,32.7 Z" id="Shape" fill="#FFFFFF"></path>
            <polygon id="Shape" fill="#FFFFFF" points="115 32.8 115 32.7 115 32.7 115 32.7 115 32.7 115 32.7 115 32.8 115 32.8 115 32.7 115 32.7 115 32.8 115 32.8 115 32.7 115 32.7"></polygon>
            <path d="M115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.7 115,32.7 115,32.8 L115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.7 115,32.7 115,32.8 C115,32.8 115,32.8 115,32.8 C115,32.8 115,32.8 115,32.8 L115,32.8 C115,32.8 115,32.8 115,32.8 C115,32.8 115,32.8 115,32.8 Z" id="Shape" fill="#FFFFFF"></path>
            <polygon id="Shape" fill="#FFFFFF" points="115.1 32.7 115 32.7 115 32.7 115.1 32.7 115.1 32.8 115.1 32.8 115.1 32.7"></polygon>
            <polygon id="Shape" fill="#FFFFFF" points="115.1 32.8 115.1 32.8 115.1 32.7 115.1 32.7 115.1 32.7 115.1 32.7 115.1 32.7 115.1 32.7 115.1 32.7 115.1 32.7 115.1 32.8"></polygon>
            <path d="M115.1,32.8 L115.1,32.8 C115.1,32.7 115.1,32.7 115.1,32.8 L115.1,32.8 C115.1,32.7 115.1,32.7 115.1,32.8 L115.1,32.8 L115.1,32.8 L115.1,32.8 L115.1,32.8 L115.1,32.8 L115.1,32.8 L115.1,32.8 L115.1,32.8 Z" id="Shape" fill="#FFFFFF"></path>
            <path d="M39.4,10.6 C39.4,8.8 40.7,7.7 42.3,7.7 C43.4,7.7 44.1,8.2 44.6,8.9 L43.8,9.4 C43.5,9 43,8.7 42.3,8.7 C41.2,8.7 40.4,9.5 40.4,10.7 C40.4,11.9 41.2,12.7 42.3,12.7 C42.9,12.7 43.4,12.4 43.6,12.2 L43.6,11.3 L42,11.3 L42,10.4 L44.7,10.4 L44.7,12.5 C44.2,13.1 43.4,13.5 42.4,13.5 C40.7,13.5 39.4,12.3 39.4,10.6 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            <polygon id="Shape" fill="#FFFFFF" fill-rule="nonzero" points="45.9 13.4 45.9 7.8 49.7 7.8 49.7 8.7 46.8 8.7 46.8 10.1 49.6 10.1 49.6 11 46.8 11 46.8 12.6 49.7 12.6 49.7 13.5"></polygon>
            <polygon id="Shape" fill="#FFFFFF" fill-rule="nonzero" points="52.5 13.4 52.5 8.7 50.8 8.7 50.8 7.8 55.2 7.8 55.2 8.7 53.5 8.7 53.5 13.4"></polygon>
            <path d="M58.6,13.4 L58.6,7.8 L59.6,7.8 L59.6,13.4 C59.6,13.4 58.6,13.4 58.6,13.4 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            <polygon id="Shape" fill="#FFFFFF" fill-rule="nonzero" points="62.3 13.4 62.3 8.7 60.6 8.7 60.6 7.8 65 7.8 65 8.7 63.3 8.7 63.3 13.4"></polygon>
            <path d="M68.2,10.6 C68.2,8.9 69.4,7.7 71.1,7.7 C72.8,7.7 74,8.9 74,10.6 C74,12.3 72.8,13.5 71.1,13.5 C69.4,13.5 68.2,12.2 68.2,10.6 Z M72.9,10.6 C72.9,9.4 72.2,8.6 71,8.6 C69.9,8.6 69.1,9.5 69.1,10.6 C69.1,11.8 69.8,12.6 71,12.6 C72.2,12.6 72.9,11.7 72.9,10.6 Z" id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
            <polygon id="Shape" fill="#FFFFFF" fill-rule="nonzero" points="79 13.4 76.1 9.4 76.1 13.4 75.1 13.4 75.1 7.8 76.1 7.8 79 11.7 79 7.8 80 7.8 80 13.4"></polygon>
        </g>
      </g>
    </g>
  </svg>
`;
const close = `
  <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: Sketch 46.2 (44496) - http://www.bohemiancoding.com/sketch -->
    <title>close x</title>
    <desc>Created with Sketch.</desc>
    <defs></defs>
    <g id="Log-In-Modal" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Login-Modal-Button" transform="translate(-518.000000, -45.000000)" fill="#DFE1E3">
            <g id="close-x" transform="translate(510.000000, 37.000000)">
                <g transform="translate(17.207107, 16.792893) rotate(-45.000000) translate(-17.207107, -16.792893) translate(5.707107, 5.292893)" id="Rectangle-14">
                    <rect transform="translate(11.500000, 11.500000) rotate(-90.000000) translate(-11.500000, -11.500000) " x="10" y="0" width="3" height="23" rx="1.5"></rect>
                    <rect x="10" y="0" width="3" height="23" rx="1.5"></rect>
                </g>
            </g>
        </g>
    </g>
  </svg>
`;

const SVG = {
  logo,
  logowithBG,
  appleApp,
  androidApp,
  close,
};

export default SVG;

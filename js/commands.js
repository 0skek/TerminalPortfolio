let github = 'https://github.com/0skek';
let website = 'https://0skeks.vercel.app';
let linkedin = 'https://www.linkedin.com/in/kuntalkek/';
let instagram = 'https://www.instagram.com/_skeks';

let existCommands = [
  'banner',
  'clear',
  'cls',
  'linkedin',
  'date',
  'help',
  'history',
  'sudo',
  'social',
  'theme',
  'theme ls',
  'theme set',
  'cd ..'
];

banner = [
  '<span style="color: yellowgreen;">localHost@skeks.dev:~$</span> Welcome ',
  ' &nbsp;',
  ' &nbsp;',
  ' ',
  "░██████╗██╗░░██╗███████╗██╗░░██╗░██████╗██╗",
  "██╔════╝██║░██╔╝██╔════╝██║░██╔╝██╔════╝╚█║",
  "╚█████╗░█████═╝░█████╗░░█████═╝░╚█████╗░░╚╝",
  "░╚═══██╗██╔═██╗░██╔══╝░░██╔═██╗░░╚═══██╗░░░",
  "██████╔╝██║░╚██╗███████╗██║░╚██╗██████╔╝░░░",
  "╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░░░░ ",
  '---------------------------------------------',
  '&nbsp;',
  
  'For a list of available commands, type<span class="command">\'help\'</span> ',
  
  ];      

social = [
  'Select and type to open the profile !',
  'Example : github',
  '----------------',
  '&nbsp;',
  '<a href="https://github.com/0skek" style="color: skyblue;">Github</a>',
  '<a href="https://www.linkedin.com/in/kuntalkek/" style="color: skyblue;">Linkedin</a>',
  '<a href="https://www.instagram.com/_skeks/" style="color: skyblue;">Instagram</a>'
];

help = [

  '<br>',
  '<span class="command">banner       </span> - <span class="helpdes">Display the header</span>',
  '<span class="command">clear | cls  </span> - <span class="helpdes">Clear the terminal</span>',
  '<span class="command">sudo         </span> - <span class="helpdes">Provides admin rights</span>',
  '<span class="command">date         </span> - <span class="helpdes">Display the actual date</span>',
  '<span class="command">help         </span> - <span class="helpdes">Check available commands</span>',
  '<span class="command">history      </span> - <span class="helpdes">View command history</span>',
  '<span class="command">project      </span> - <span class="helpdes">View coding projects</span>',
  '<span class="command">social       </span> - <span class="helpdes">Display social networks</span>',
  '<span class="command">theme        </span> - <span class="helpdes">Theme configurations</span>',
  '<span class="command">pwd          </span> - <span class="helpdes">Print present working directory</span>',

  '<br>',
  '[TAB]              Trigger completion',
  '[ ↑ ]              To go to the Previous command',
  '[ ↓ ]              To go to the Next command',
  '[ history ]        To view the History',
];

themes = ['dark', 'light', 'ocean', 'earthy', 'neon', 'viper', 'pastel'];

theme = [
  'Usage: theme [arg]',
  'Args:',
  ' - ls: list all available themes',
  ' - set: set a theme',
  '<br>',
  'Example:',
  ' theme ls # to list all available themes',
  ' <span style="color:skyblue;">theme set light</span> # to set a theme',
];           

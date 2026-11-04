const fs = require('fs');
let code = fs.readFileSync('public/app.js', 'utf8');

// Replace nav definition to add language switcher
const oldNavPart = '<div class="navActions">';
const newNavPart = '<div class="navActions"><select class="notranslate navLangSelect" onchange="setLang(this.value)" aria-label="Language"><option ${state.lang===\'English\'?\'selected\':\'\'}>English</option><option ${state.lang===\'Tamil\'?\'selected\':\'\'}>Tamil</option><option ${state.lang===\'Telugu\'?\'selected\':\'\'}>Telugu</option><option ${state.lang===\'Hindi\'?\'selected\':\'\'}>Hindi</option></select>';

if (code.includes(oldNavPart)) {
  code = code.replace(oldNavPart, newNavPart);
  fs.writeFileSync('public/app.js', code, 'utf8');
  console.log('Successfully updated navActions with language selector');
} else {
  console.error('navActions not found in public/app.js');
}

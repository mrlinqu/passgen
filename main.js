let dicts = {
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lower: 'abcdefghijklmnopqrstuvwxyz',
    digits: '1234567890',
    minus: '-',
    underline: '_',
    space: ' ',
    specials: '!@#$%&*?~',
    brackets: '[]{}()<>',
};

function escapeHtml(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
};

function generate () {
    let duplicate = document.getElementById('opt_duplicate').checked,
        exclude = document.getElementById('opt_exclude').value,
        pass_len = document.getElementById('opt_lenght').value,
        dict = '',
        cnt = 20;

    for (key in dicts) {
        if (document.getElementById('opt_'+key).checked) {
            dict += dicts[key];
        }
    }
    dict += document.getElementById('opt_include').value;

    if (exclude) {
        let re = new RegExp('[' + exclude + ']', 'g');
        dict = dict.replace(re, "");
    }

    document.getElementById('result').innerHTML = '';
    for (let c = 0; c < cnt; c++) {
        let pass = '';
        let ch = '';
        let prev = '';
        while (pass.length < pass_len) {
            do {
                ch = dict.charAt(Math.floor(Math.random() * dict.length));
            } while (duplicate && ch == prev)
            prev = ch;
            pass += ch;
        }
        console.log(pass);
        document.getElementById('result').innerHTML += '<p>'+escapeHtml(pass)+'</p>';
    }
}

function init()
{
    
}
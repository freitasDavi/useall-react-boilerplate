const validarCpf = (cpf) => {
    if (cpf != '') {
        if ((cpf = cpf.replace(/[^\d]/g, '').split('')).length != 11) {
            return false;
        }

        if ((new RegExp('^' + cpf[0] + '{11}$')).exec(cpf.join(''))) {
            return false;
        }

        for (var s = 10, n = 0, i = 0; s >= 2; n += cpf[i++] * s--) {}

        if (cpf[9] != ((n %= 11) < 2 ? 0 : 11 - n)) {
            return false;
        }

        for (var s = 11, n = 0, i = 0; s >= 2; n += cpf[i++] * s--) {}

        if (cpf[10] != ((n %= 11) < 2 ? 0 : 11 - n)) {
            return false;
        }
        
        return true;
    } else {
        return true;
    }
}

const validarCnpj = (cnpj) => {
    if (parseInt(cnpj) === 0) {
        return false;
    } else {
        if (cnpj != '') {
            var exp = /\.|\-|\//g;
            var cnpj = cnpj.toString().replace(exp, '');
            var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
            if ((cnpj = cnpj.replace(/[^\d]/g, '').split('')).length != 14) {
                return false;
            }
            for (var i = 0, n = 0; i < 12; n += cnpj[i] * b[++i]) {}
            if (cnpj[12] != ((n %= 11) < 2 ? 0 : 11 - n)) {
                return false;
            }
            for (var i = 0, n = 0; i <= 12; n += cnpj[i] * b[i++]) {}
            if (cnpj[13] != ((n %= 11) < 2 ? 0 : 11 - n)) {
                return false;
            }
            return true;
        } else {
            return true;
        }
    }
}

export { validarCpf, validarCnpj };
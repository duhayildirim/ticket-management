function codeGenerator() {
    const generateRandomString = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const nums = '0123456789';

        let result = '';
        for (let i = 0; i < length; i++) {
            if (i < 3) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            } else {
                result += nums.charAt(Math.floor(Math.random() * nums.length));
            }
        }
        return result;
    };

    let code = '';
    while (code.length !== 9 || (code.match(/[A-Z]/g) || []).length !== 3 || (code.match(/[0-9]/g) || []).length !== 6) {
        code = generateRandomString(9);
    }

    return code;
}

export default codeGenerator;

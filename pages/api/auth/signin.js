import cookie from 'cookie';

export default (req, res) => {
    const cookieSerialized = cookie.serialize('PHPSESSID', 'a52121f848ca7903b74724af29e055e6', {
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 72576000,
        httpOnly: true,
        path: '/',
    });
    res.setHeader('Set-Cookie', cookieSerialized);
    res.status(200).json({ status: 'success' });
}
import load from 'templates';

export function create(data, done) {
    const templateData = {
        title: 'the listItem component',
        text: data
    };

    load('/src/listItem/listItem.html', templateData, (el) => {
        if (done) {
            done(el);
        }
    });
}

function importAll(r) {
    let images = {};
    r.keys().forEach((item) => {
        const key = item.replace('./', '').replace(/\.[^/.]+$/, ''); // Remove the file extension
        images[key] = r(item);
    });
    return images;
}

const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));

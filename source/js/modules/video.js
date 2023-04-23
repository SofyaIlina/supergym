const video = document.querySelector('.video');
const button = video.querySelector('.video__button');
const preview = video.querySelector('.video__preview');
const iframeBlock = video.querySelector('[data-video-container]');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

button.addEventListener('click', () => {
  if (video && iframeBlock) {
    button.remove();
    preview.remove();
    const newIframe = createIframe(iframeBlock);
    iframeBlock.append(newIframe);
  }
});

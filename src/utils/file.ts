export const convertDataURLtoBlob = (dataUrl: string) => {
  const arr = dataUrl.split(',');
  // @ts-ignore
  const mime = arr[0].match(/:(.*?);/)[1];

  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  // eslint-disable-next-line no-plusplus
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
};

export const downImageAction = (url: string, fileName = 'download') => {
  const a = document.createElement('a');
  const clickEvent = document.createEvent('MouseEvents');
  a.setAttribute('href', url);
  a.setAttribute('download', fileName);
  a.setAttribute('target', '_blank');
  clickEvent.initEvent('click', true, true);
  a.dispatchEvent(clickEvent);
};
export const convertCanvasToImage = (
  canvas: HTMLCanvasElement,
  fileName: string,
) => {
  const blob = convertDataURLtoBlob(canvas.toDataURL('img/png', 0.92));
  const url = URL.createObjectURL(blob);
  downImageAction(url, fileName);
};

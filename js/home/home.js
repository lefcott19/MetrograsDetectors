const home = {};

home.screen = 'screen2';

home.elements = {
  pageTitle: element.id('pageTitle'),
  logo: element.id('logo'),
  arrowDown: element.id('arrowDown'),
  arrowUp: element.class('arrowUp'),
  arrowLeft: element.class('arrowLeft'),
  buttons: element.class('button'),
  footer: element.id('footer'),
  bigImage1: element.id('bigImage1'),
  bigImage2: element.id('bigImage2'),
  downContainer: element.id('downContainer'),
  soundContainer: element.id('soundContainer'),
  detectorRunningTitle: element.id('detectorRunningTitle'),
  buttonDetectorContainer: element.id('buttonDetectorContainer'),
  detectorButtons: element.class('detectorButton'),
  detectorButtonLeft: element.id('detectorButtonLeft'),
  detectorButtonRight: element.id('detectorButtonRight'),
  volume: element.id('volume'),
  detectorEmpty: element.id('detectorEmpty'),
  mobileHome: element.id('mobileHome'),
  techContainer: element.id('techContainer'),
  techTitle1: element.id('techTitle1'),
  techDescription: element.id('techDescription'),
  techBoxDescription: element.id('techBoxDescription'),
  techTitles: element.class('techTitle'),
  techTitle3: element.id('techTitle3'),
  bigImage3: element.id('bigImage3'),
  bigImage4: element.id('bigImage4')
};

home.constants = {
  imgHeightCoef: 0.82
};

home.resize = () => {
  const tabletRelation = [0.6188, 1];
  const { imgHeightCoef } = home.constants;
  const imgWidth = innerWidth / 2;
  const imgHeight = innerHeight * imgHeightCoef;
  const maxSize = Math.max(imgWidth, imgHeight);

  home.elements.footer.style.top = `${imgHeight}px`;
  home.elements.footer.style.height = `${(1 - imgHeightCoef) * visualViewport.height}px`;

  home.elements.bigImage1.setAttribute('height', imgHeight);
  home.elements.bigImage2.setAttribute('height', imgHeight);
  home.elements.downContainer.style.width = `${innerWidth}px`;
  home.elements.downContainer.style.top = `${innerHeight}px`;
  home.elements.soundContainer.style.width = `${innerWidth}px`;
  home.elements.soundContainer.style.height = `${innerHeight}px`;
  home.elements.soundContainer.style.top = `${innerHeight}px`;
  home.elements.techContainer.style.width = `${innerWidth}px`;
  home.elements.techContainer.style.height = `${innerHeight}px`;
  home.elements.techContainer.style.top = `${innerHeight}px`;
  home.elements.bigImage3.setAttribute('height', innerHeight);
  home.elements.bigImage4.setAttribute('height', innerHeight);

  const viewedWidth = (imgWidth / maxSize) * 100;
  const viewedHeight = (imgHeight / maxSize) * 100;
  home.elements.bigImage1.setAttribute(
    'viewBox',
    `${(100 - viewedWidth) / 2} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`
  );
  home.elements.bigImage2.setAttribute(
    'viewBox',
    `${(100 - viewedWidth) / 4} ${(100 - viewedHeight) / 2} ${viewedWidth} ${viewedHeight}`
  );
  home.elements.bigImage3.setAttribute(
    'viewBox',
    `${(100 - viewedWidth) / 2} 0 ${viewedWidth} 100`
  );
  home.elements.bigImage4.setAttribute(
    'viewBox',
    `${(100 - viewedWidth) / 4} 0 ${viewedWidth} 100`
  );

  if (innerWidth < innerHeight) {
    mobile.resize();
  } else {
    web.resize();
  }
  const relation = innerWidth / innerHeight;
  if (relation >= tabletRelation[0] && relation <= tabletRelation[1]) {
    tablet.resize();
  }
};


home.changeScreen = newScreen => {};

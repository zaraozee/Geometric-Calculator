// Cube
const btnCube = document.querySelector('.btn');
const txtSide = document.querySelector('#sisi');
const resultAreaCube = document.querySelector('.luas');
const resultVolumeCube = document.querySelector('.volume');

btnCube.addEventListener('click', () => {
  const side = parseFloat(txtSide.value);

  if (isNaN(side)) {
    alert("Please enter a valid side length!");
    return;
  }

  const area = 6 * side ** 2;
  const volume = side ** 3;

  resultAreaCube.innerHTML = `${area} cm²`;
  resultVolumeCube.innerHTML = `${volume} cm³`;
});

// Cuboid
const btnCuboid = document.querySelector('.btn_balok');
const txtLength = document.querySelector('#panjang');
const txtWidth = document.querySelector('#lebar');
const txtHeight = document.querySelector('#tinggi');
const resultAreaCuboid = document.querySelector('.luas_balok');
const resultVolumeCuboid = document.querySelector('.volume_balok');

btnCuboid.addEventListener('click', () => {
  const length = parseFloat(txtLength.value);
  const width = parseFloat(txtWidth.value);
  const height = parseFloat(txtHeight.value);

  if (isNaN(length) || isNaN(width) || isNaN(height)) {
    alert("Please enter valid values for length, width, and height!");
    return;
  }

  const area = 2 * (length * width + length * height + width * height);
  const volume = length * width * height;

  resultAreaCuboid.innerHTML = `${area} cm²`;
  resultVolumeCuboid.innerHTML = `${volume} cm³`;
});

// Sphere
const btnSphere = document.querySelector('.btn_bola');
const txtRadius = document.querySelector('#jari-jari');
const resultAreaSphere = document.querySelector('.luas_bola');
const resultVolumeSphere = document.querySelector('.volume_bola');

btnSphere.addEventListener('click', () => {
  const radius = parseFloat(txtRadius.value);

  if (isNaN(radius)) {
    alert("Please enter a valid radius!");
    return;
  }

  const phi = 3.14;
  const area = (4 * phi * radius ** 2).toFixed(2);
  const volume = ((4 / 3) * phi * radius ** 3).toFixed(2);

  resultAreaSphere.innerHTML = `${area} cm²`;
  resultVolumeSphere.innerHTML = `${volume} cm³`;
});

// Cylinder
const btnCylinder = document.querySelector('.btn_tabung');
const txtRadiusCylinder = document.querySelector('#jari_silinder');
const txtHeightCylinder = document.querySelector('#tinggi_silinder');
const resultAreaCylinder = document.querySelector('.luas_tabung');
const resultVolumeCylinder = document.querySelector('.volume_tabung');

btnCylinder.addEventListener('click', () => {
  const radius = parseFloat(txtRadiusCylinder.value);
  const height = parseFloat(txtHeightCylinder.value);

  if (isNaN(radius) || isNaN(height)) {
    alert("Please enter valid values for radius and height!");
    return;
  }

  const phi = 3.14;
  const area = (2 * phi * radius * (radius + height)).toFixed(2);
  const volume = (phi * radius ** 2 * height).toFixed(2);

  resultAreaCylinder.innerHTML = `${area} cm²`;
  resultVolumeCylinder.innerHTML = `${volume} cm³`;
});

// Cone
const btnCone = document.querySelector('.btn_kerucut');
const txtRadiusCone = document.querySelector('#jari_kerucut');
const txtHeightCone = document.querySelector('#tinggi_kerucut');
const resultAreaCone = document.querySelector('.luas_kerucut');
const resultVolumeCone = document.querySelector('.volume_kerucut');

btnCone.addEventListener('click', () => {
  const radius = parseFloat(txtRadiusCone.value);
  const height = parseFloat(txtHeightCone.value);

  if (isNaN(radius) || isNaN(height)) {
    alert("Please enter valid values for radius and height!");
    return;
  }

  const phi = 3.14;
  const slantHeight = Math.sqrt(radius ** 2 + height ** 2);
  const area = (phi * radius * (radius + slantHeight)).toFixed(2);
  const volume = ((1 / 3) * phi * radius ** 2 * height).toFixed(2);

  resultAreaCone.innerHTML = `${area} cm²`;
  resultVolumeCone.innerHTML = `${volume} cm³`;
});

// Triangular Pyramid (Limas Segitiga)
const btnTriPyramid = document.querySelector('.btn_limas3');
const txtBaseAreaTri = document.querySelector('#alas_limas3');
const txtheightTri = document.querySelector('#tinggi_limas3');
const resultVolumeTriPyramid = document.querySelector('.volume_limas3');

btnTriPyramid.addEventListener('click', () => {
  const baseArea = parseFloat(txtBaseAreaTri.value);
  const height = parseFloat(txtheightTri.value);

  if (isNaN(baseArea) || isNaN(height)) {
    alert("Please enter valid values for base area and height!");
    return;
  }

  const volume = ((1/3) * baseArea * height).toFixed(2);
  resultVolumeTriPyramid.innerHTML = `${volume} cm³`;
});

// Square Pyramid (Limas Segiempat)
const btnSquarePyramid = document.querySelector('.btn_limas4');
const txtBaseSideSquare = document.querySelector('#sisi_limas4');
const txtHeightSquare = document.querySelector('#tinggi_limas4');
const resultVolumeSquarePyramid = document.querySelector('.volume_limas4');

btnSquarePyramid.addEventListener('click', () => {
  const baseSide = parseFloat(txtBaseSideSquare.value);
  const height = parseFloat(txtHeightSquare.value);

  if (isNaN(baseSide) || isNaN(height)) {
    alert("Please enter valid values for base side and height!");
    return;
  }

  const baseArea = baseSide ** 2;
  const volume = ((1/3) * baseArea * height).toFixed(2);
  resultVolumeSquarePyramid.innerHTML = `${volume} cm³`;
});

// Prism
const btnPrism = document.querySelector('.btn_prisma');
const txtBaseAreaPrism = document.querySelector('#luasAlas');
const txtBasePerimeterPrism = document.querySelector('#kelilingAlas');
const txtHeightPrism = document.querySelector('#tinggiPrisma');
const resultVolumePrism = document.querySelector('.volume_prisma');
const resultSurfacePrism = document.querySelector('.luas_permukaan_prisma');

btnPrism.addEventListener('click', () => {
  const baseArea = parseFloat(txtBaseAreaPrism.value);
  const basePerimeter = parseFloat(txtBasePerimeterPrism.value);
  const height = parseFloat(txtHeightPrism.value);

  if (isNaN(baseArea) || isNaN(basePerimeter) || isNaN(height)) {
    alert("Please enter valid values for base area, perimeter, and height!");
    return;
  }

  const volume = (baseArea * height).toFixed(2);
  const surfaceArea = ((basePerimeter * height) + (2 * baseArea)).toFixed(2);

  resultVolumePrism.innerHTML = `${volume} cm³`;
  resultSurfacePrism.innerHTML = `${surfaceArea} cm²`;
});

// Octahedron
const btnOctahedron = document.querySelector('.btn_octahedron');
const txtEdgeOctahedron = document.querySelector('#octahedronEdge');
const resultSurfaceOctahedron = document.querySelector('.surface_octahedron');
const resultVolumeOctahedron = document.querySelector('.volume_octahedron');

btnOctahedron.addEventListener('click', () => {
  const edge = parseFloat(txtEdgeOctahedron.value);

  if (isNaN(edge)) {
    alert("Please enter a valid edge length!");
    return;
  }

  const surfaceArea = (2 * Math.sqrt(3) * edge ** 2).toFixed(2);
  const volume = ((Math.sqrt(2)/3) * edge ** 3).toFixed(2);

  resultSurfaceOctahedron.innerHTML = `${surfaceArea} cm²`;
  resultVolumeOctahedron.innerHTML = `${volume} cm³`;
});

// Dodecahedron
const btnDodecahedron = document.querySelector('.btn_dodecahedron');
const txtEdgeDodecahedron = document.querySelector('#dodecahedronEdge');
const resultSurfaceDodecahedron = document.querySelector('.surface_dodecahedron');
const resultVolumeDodecahedron = document.querySelector('.volume_dodecahedron');

btnDodecahedron.addEventListener('click', () => {
  const edge = parseFloat(txtEdgeDodecahedron.value);

  if (isNaN(edge)) {
    alert("Please enter a valid edge length!");
    return;
  }

  const sqrt5 = Math.sqrt(5);
  const surfaceArea = (3 * Math.sqrt(25 + 10 * sqrt5) * edge ** 2).toFixed(2);
  const volume = (((15 + 7 * sqrt5)/4) * edge ** 3).toFixed(2);

  resultSurfaceDodecahedron.innerHTML = `${surfaceArea} cm²`;
  resultVolumeDodecahedron.innerHTML = `${volume} cm³`;
});

// Icosahedron
const btnIcosahedron = document.querySelector('.btn_icosahedron');
const txtEdgeIcosahedron = document.querySelector('#icosahedronEdge');
const resultSurfaceIcosahedron = document.querySelector('.surface_icosahedron');
const resultVolumeIcosahedron = document.querySelector('.volume_icosahedron');

btnIcosahedron.addEventListener('click', () => {
  const edge = parseFloat(txtEdgeIcosahedron.value);

  if (isNaN(edge)) {
    alert("Please enter a valid edge length!");
    return;
  }

  const sqrt5 = Math.sqrt(5);
  const surfaceArea = (5 * Math.sqrt(3) * edge ** 2).toFixed(2);
  const volume = ((5/12) * (3 + sqrt5) * edge ** 3).toFixed(2);

  resultSurfaceIcosahedron.innerHTML = `${surfaceArea} cm²`;
  resultVolumeIcosahedron.innerHTML = `${volume} cm³`;
});

// Torus
const btnTorus = document.querySelector('.btn_torus');
const txtMajorRadius = document.querySelector('#torusMajor');
const txtMinorRadius = document.querySelector('#torusMinor');
const resultSurfaceTorus = document.querySelector('.surface_torus');
const resultVolumeTorus = document.querySelector('.volume_torus');

btnTorus.addEventListener('click', () => {
  const R = parseFloat(txtMajorRadius.value);
  const r = parseFloat(txtMinorRadius.value);

  if (isNaN(R) || isNaN(r)) {
    alert("Please enter valid values for major and minor radius!");
    return;
  }

  const surfaceArea = (4 * Math.PI ** 2 * R * r).toFixed(2);
  const volume = (2 * Math.PI ** 2 * R * r ** 2).toFixed(2);

  resultSurfaceTorus.innerHTML = `${surfaceArea} cm²`;
  resultVolumeTorus.innerHTML = `${volume} cm³`;
});

// Trapezoid (Trapesium)
const btnTrapezoid = document.querySelector('.btn_trapesium');
const txtSideA = document.querySelector('#sisi_a_trapesium');
const txtSideB = document.querySelector('#sisi_b_trapesium');
const txtHeightTrapezoid = document.querySelector('#tinggi_trapesium');
const txtSideC = document.querySelector('#sisi_c_trapesium');
const txtSideD = document.querySelector('#sisi_d_trapesium');
const resultAreaTrapezoid = document.querySelector('.luas_trapesium');
const resultPerimeterTrapezoid = document.querySelector('.keliling_trapesium');

btnTrapezoid.addEventListener('click', () => {
  const a = parseFloat(txtSideA.value);
  const b = parseFloat(txtSideB.value);
  const h = parseFloat(txtHeightTrapezoid.value);
  const c = parseFloat(txtSideC.value);
  const d = parseFloat(txtSideD.value);

  if (isNaN(a) || isNaN(b) || isNaN(h) || isNaN(c) || isNaN(d)) {
    alert("Please enter valid values for all sides and height!");
    return;
  }

  const area = (0.5 * (a + b) * h).toFixed(2);
  const perimeter = (a + b + c + d).toFixed(2);

  resultAreaTrapezoid.innerHTML = `${area} cm²`;
  resultPerimeterTrapezoid.innerHTML = `${perimeter} cm`;
});

// Parallelogram (Jajar Genjang)
const btnParallelogram = document.querySelector('.btn_jajar');
const txtBasePara = document.querySelector('#alas_jajar');
const txtHeightPara = document.querySelector('#tinggi_jajar');
const txtSidePara = document.querySelector('#sisi_miring_jajar');
const resultAreaPara = document.querySelector('.luas_jajar');
const resultPerimeterPara = document.querySelector('.keliling_jajar');

btnParallelogram.addEventListener('click', () => {
  const base = parseFloat(txtBasePara.value);
  const height = parseFloat(txtHeightPara.value);
  const side = parseFloat(txtSidePara.value);

  if (isNaN(base) || isNaN(height) || isNaN(side)) {
    alert("Please enter valid values for base, height, and side!");
    return;
  }

  const area = (base * height).toFixed(2);
  const perimeter = (2 * (base + side)).toFixed(2);

  resultAreaPara.innerHTML = `${area} cm²`;
  resultPerimeterPara.innerHTML = `${perimeter} cm`;
});

// Rhombus (Belah Ketupat)
const btnRhombus = document.querySelector('.btn_ketupat');
const txtD1 = document.querySelector('#d1');
const txtD2 = document.querySelector('#d2');
const txtSideRhombus = document.querySelector('#sisi_ketupat');
const resultAreaRhombus = document.querySelector('.luas_ketupat');
const resultPerimeterRhombus = document.querySelector('.keliling_ketupat');

btnRhombus.addEventListener('click', () => {
  const d1 = parseFloat(txtD1.value);
  const d2 = parseFloat(txtD2.value);
  const side = parseFloat(txtSideRhombus.value);

  if (isNaN(d1) || isNaN(d2) || isNaN(side)) {
    alert("Please enter valid values for diagonals and side!");
    return;
  }

  const area = (0.5 * d1 * d2).toFixed(2);
  const perimeter = (4 * side).toFixed(2);

  resultAreaRhombus.innerHTML = `${area} cm²`;
  resultPerimeterRhombus.innerHTML = `${perimeter} cm`;
});

// Kite (Layang-layang)
const btnKite = document.querySelector('.btn_layang');
const txtD1Kite = document.querySelector('#d1_layang');
const txtD2Kite = document.querySelector('#d2_layang');
const txtSideAKite = document.querySelector('#sisiA_layang');
const txtSideBKite = document.querySelector('#sisiB_layang');
const resultAreaKite = document.querySelector('.luas_layang');
const resultPerimeterKite = document.querySelector('.keliling_layang');

btnKite.addEventListener('click', () => {
  const d1 = parseFloat(txtD1Kite.value);
  const d2 = parseFloat(txtD2Kite.value);
  const a = parseFloat(txtSideAKite.value);
  const b = parseFloat(txtSideBKite.value);

  if (isNaN(d1) || isNaN(d2) || isNaN(a) || isNaN(b)) {
    alert("Please enter valid values for diagonals and sides!");
    return;
  }

  const area = (0.5 * d1 * d2).toFixed(2);
  const perimeter = (2 * (a + b)).toFixed(2);

  resultAreaKite.innerHTML = `${area} cm²`;
  resultPerimeterKite.innerHTML = `${perimeter} cm`;
});

// Circle (Lingkaran)
const btnCircle = document.querySelector('.btn_lingkaran');
const txtradius = document.querySelector('#radius');
const resultAreaCircle = document.querySelector('.luas_lingkaran');
const resultCircumference = document.querySelector('.keliling_lingkaran');

btnCircle.addEventListener('click', () => {
  const radius = parseFloat(txtradius.value);

  if (isNaN(radius)) {
    alert("Please enter a valid radius!");
    return;
  }

  const area = (Math.PI * radius ** 2).toFixed(2);
  const circumference = (2 * Math.PI * radius).toFixed(2);

  resultAreaCircle.innerHTML = `${area} cm²`;
  resultCircumference.innerHTML = `${circumference} cm`;
});

// Triangle (Segitiga)
const btnTriangle = document.querySelector('.btn_segitiga');
const txtBaseTri = document.querySelector('#alas');
const txtHeightTri = document.querySelector('#tinggi');
const txtSideATri = document.querySelector('#sisiA');
const txtSideBTri = document.querySelector('#sisiB');
const txtSideCTri = document.querySelector('#sisiC');
const resultAreaTri = document.querySelector('.luas_segitiga');
const resultPerimeterTri = document.querySelector('.keliling_segitiga');

btnTriangle.addEventListener('click', () => {
  const base = parseFloat(txtBaseTri.value);
  const height = parseFloat(txtHeightTri.value);
  const a = parseFloat(txtSideATri.value);
  const b = parseFloat(txtSideBTri.value);
  const c = parseFloat(txtSideCTri.value);

  if (isNaN(base) || isNaN(height) || isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Please enter valid values for base, height, and all sides!");
    return;
  }

  const area = (0.5 * base * height).toFixed(2);
  const perimeter = (a + b + c).toFixed(2);

  resultAreaTri.innerHTML = `${area} cm²`;
  resultPerimeterTri.innerHTML = `${perimeter} cm`;
});

// Square (Persegi)
const btnSquare = document.querySelector('.btn_persegi');
const txtSideSquare = document.querySelector('#sisi_persegi');
const resultAreaSquare = document.querySelector('.luas_persegi');
const resultPerimeterSquare = document.querySelector('.keliling_persegi');

btnSquare.addEventListener('click', () => {
  const side = parseFloat(txtSideSquare.value);

  if (isNaN(side)) {
    alert("Please enter a valid side length!");
    return;
  }

  const area = (side * side).toFixed(2);
  const perimeter = (4 * side).toFixed(2);

  resultAreaSquare.innerHTML = `${area} cm²`;
  resultPerimeterSquare.innerHTML = `${perimeter} cm`;
});

// Rectangle (Persegi Panjang)
const btnRectangle = document.querySelector('.btn_persegiPanjang');
const txtlength = document.querySelector('#panjang_persegi');
const txtwidth = document.querySelector('#lebar_persegi');
const resultAreaRectangle = document.querySelector('.luas_persegiPanjang');
const resultPerimeterRectangle = document.querySelector('.keliling_persegiPanjang');

btnRectangle.addEventListener('click', () => {
  const length = parseFloat(txtlength.value);
  const width = parseFloat(txtwidth.value);

  if (isNaN(length) || isNaN(width)) {
    alert("Please enter valid values for length and width!");
    return;
  }

  const area = (length * width).toFixed(2);
  const perimeter = (2 * (length + width)).toFixed(2);

  resultAreaRectangle.innerHTML = `${area} cm²`;
  resultPerimeterRectangle.innerHTML = `${perimeter} cm`;
});

// Pentagon (Segi Lima)
const btnPentagon = document.querySelector('.btn_pentagon');
const txtSidePentagon = document.querySelector('#sidePentagon');
const txtApothem = document.querySelector('#apothemPentagon');
const resultAreaPentagon = document.querySelector('.area_pentagon');
const resultPerimeterPentagon = document.querySelector('.perimeter_pentagon');

btnPentagon.addEventListener('click', () => {
  const side = parseFloat(txtSidePentagon.value);
  const apothem = parseFloat(txtApothem.value);

  if (isNaN(side) || isNaN(apothem)) {
    alert("Please enter valid values for side and apothem!");
    return;
  }

  const area = ((5/2) * side * apothem).toFixed(2);
  const perimeter = (5 * side).toFixed(2);

  resultAreaPentagon.innerHTML = `${area} cm²`;
  resultPerimeterPentagon.innerHTML = `${perimeter} cm`;
});

// Hexagon (Segi Enam)
const btnHexagon = document.querySelector('.btn_hexagon');
const txtSideHexagon = document.querySelector('#sideHexagon');
const resultAreaHexagon = document.querySelector('.area_hexagon');
const resultPerimeterHexagon = document.querySelector('.perimeter_hexagon');

btnHexagon.addEventListener('click', () => {
  const side = parseFloat(txtSideHexagon.value);

  if (isNaN(side)) {
    alert("Please enter a valid side length!");
    return;
  }

  const area = ((3 * Math.sqrt(3) / 2) * Math.pow(side, 2)).toFixed(2);
  const perimeter = (6 * side).toFixed(2);

  resultAreaHexagon.innerHTML = `${area} cm²`;
  resultPerimeterHexagon.innerHTML = `${perimeter} cm`;
});

// Ellipse (Elips)
const btnEllipse = document.querySelector('.btn_ellipse');
const txtSemiMajor = document.querySelector('#semiMajor');
const txtSemiMinor = document.querySelector('#semiMinor');
const resultAreaEllipse = document.querySelector('.area_ellipse');
const resultCircumferenceEllipse = document.querySelector('.circumference_ellipse');

btnEllipse.addEventListener('click', () => {
  const semiMajor = parseFloat(txtSemiMajor.value);
  const semiMinor = parseFloat(txtSemiMinor.value);

  if (isNaN(semiMajor) || isNaN(semiMinor)) {
    alert("Please enter valid values for semi-major and semi-minor axes!");
    return;
  }

  const area = (Math.PI * semiMajor * semiMinor).toFixed(2);
  const circumference = (2 * Math.PI * Math.sqrt((Math.pow(semiMajor, 2) + Math.pow(semiMinor, 2)) / 2)).toFixed(2);

  resultAreaEllipse.innerHTML = `${area} cm²`;
  resultCircumferenceEllipse.innerHTML = `${circumference} cm`;
});


const toggleModal = (openBtnId, modalId, closeBtnId) => {
  const openBtn = document.getElementById(openBtnId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
};

toggleModal("openKubus", "modalKubus", "closeKubus");
toggleModal("openBalok", "modalBalok", "closeBalok");
toggleModal("openBola", "modalBola", "closeBola");
toggleModal("openTabung", "modalTabung", "closeTabung");
toggleModal("openKerucut", "modalKerucut", "closeKerucut");
toggleModal("openLimas3", "modalLimas3", "closeLimas3");
toggleModal("openLimas4", "modalLimas4", "closeLimas4");
toggleModal("openPrisma", "modalPrisma", "closePrisma");
toggleModal("openOctahedron", "modalOctahedron", "closeOctahedron");
toggleModal("openDodecahedron", "modalDodecahedron", "closeDodecahedron");
toggleModal("openIcosahedron", "modalIcosahedron", "closeIcosahedron");
toggleModal("openTorus", "modalTorus", "closeTorus");
toggleModal("openTrapesium", "modalTrapesium", "closeTrapesium");
toggleModal("openJajar", "modalJajar", "closeJajar");
toggleModal("openKetupat", "modalKetupat", "closeKetupat");
toggleModal("openLayang", "modalLayang", "closeLayang");
toggleModal("openLingkaran", "modalLingkaran", "closeLingkaran");
toggleModal("openSegitiga", "modalSegitiga", "closeSegitiga");
toggleModal("openPersegi", "modalPersegi", "closePersegi");
toggleModal("openPersegiPanjang", "modalPersegiPanjang", "closePersegiPanjang");
toggleModal("openPentagon", "modalPentagon", "closePentagon");
toggleModal("openHexagon", "modalHexagon", "closeHexagon");
toggleModal("openEllipse", "modalEllipse", "closeEllipse");


function Talaj_fal() {

  this.x = [];
  this.y = [];
  this.player_width = [];
  this.player_height = [];
  this.tm = [];
  this.ey = [];
  this.szt = [];
  this.kerdi = [];
  this.anim = [];

  this.nx_1 = [];
  this.ny_1 = [];
  this.nx_2 = [];
  this.ny_2 = [];
  this.nx_3 = [];
  this.ny_3 = [];
  this.nx_4 = [];
  this.ny_4 = [];

  this.nxe_1 = [];
  this.nye_1 = [];
  this.nxe_2 = [];
  this.nye_2 = [];
  this.nxe_3 = [];
  this.nye_3 = [];
  this.nxe_4 = [];
  this.nye_4 = [];
  this.t = [];
  this.nei = [];
  this.ni = 0;

  this.kerdsmillis = 0;
  this.kerdl = false;

  this.sebesseg_v2 = 0;

  this.p_kcs = loadImage("assets/imgs/props/kcs.png");
  this.p_kozcs = loadImage("assets/imgs/props/kozcs.png");
  this.p_ncs = loadImage("assets/imgs/props/ncs.png");
  this.p_kerd = loadImage("assets/imgs/props/kerd.png");
  this.p_t = loadImage("assets/imgs/props/t.png");
  this.p_l = loadImage("assets/imgs/props/l.png");
  this.p_padlo = loadImage("assets/imgs/props/padlo.png");
  this.p_kerdu = loadImage("assets/imgs/props/kerd_utve.png");
  this.p_kerds = loadImage("assets/imgs/props/kerd_s.png");
  this.ptt = loadImage("assets/imgs/props/tt.png");

  this.x[0] = 10;
  this.y[0] = 580;
  this.player_width[0] = 41;
  this.player_height[0] = 55;

  this.x[1] = 3044;
  this.y[1] = 580;
  this.player_width[1] = 41;
  this.player_height[1] = 55;

  this.x[2] = 3180;
  this.y[2] = 580;
  this.player_width[2] = 41;
  this.player_height[2] = 55;

  this.x[3] = 3836;
  this.y[3] = 580;
  this.player_width[3] = 41;
  this.player_height[3] = 55;

  this.x[4] = 3973;
  this.y[4] = 580;
  this.player_width[4] = 41;
  this.player_height[4] = 55;

  this.x[5] = 6761
  this.y[5] = 580;
  this.player_width[5] = 41;
  this.player_height[5] = 55;

  this.x[6] = 6902;
  this.y[6] = 580;
  this.player_width[6] = 41;
  this.player_height[6] = 55;

  this.x[7] = this.x[0];
  this.y[7] = this.y[0];
  this.player_width[7] = this.player_width[0];
  this.player_height[7] = this.player_height[0];

  for (var i = 8; i <= 80; i++) {
    this.x[i] = this.x[i - 1] + this.player_width[i - 1];
    this.y[i] = this.y[i - 1];
    this.player_width[i] = this.player_width[i - 1];
    this.player_height[i] = this.player_height[i - 1];
  }

  this.x[81] = this.x[2];
  this.y[81] = this.y[2];
  this.player_width[81] = this.player_width[2];
  this.player_height[81] = this.player_height[2];

  for (var i = 82; i <= 96; i++) {
    this.x[i] = this.x[i - 1] + this.player_width[i - 1];
    this.y[i] = this.y[i - 1];
    this.player_width[i] = this.player_width[i - 1];
    this.player_height[i] = this.player_height[i - 1];
  }

  this.x[97] = this.x[4];
  this.y[97] = this.y[4];
  this.player_width[97] = this.player_width[4];
  this.player_height[97] = this.player_height[4];

  for (var i = 98; i <= 164; i++) {
    this.x[i] = this.x[i - 1] + this.player_width[i - 1];
    this.y[i] = this.y[i - 1];
    this.player_width[i] = this.player_width[i - 1];
    this.player_height[i] = this.player_height[i - 1];
  }

  this.x[165] = this.x[6];
  this.y[165] = this.y[6];
  this.player_width[165] = this.player_width[6];
  this.player_height[165] = this.player_height[6];

  for (var i = 166; i <= 230; i++) {
    this.x[i] = this.x[i - 1] + this.player_width[i - 1];
    this.y[i] = this.y[i - 1];
    this.player_width[i] = this.player_width[i - 1];
    this.player_height[i] = this.player_height[i - 1];
  }

  this.x[1000] = 754;
  this.y[1000] = 400;
  this.player_width[1000] = 44;
  this.player_height[1000] = 44;
  this.tm[1000] = false;
  this.ey[1000] = this.y[1000];
  this.kerdi[1000] = 0;

  this.x[1001] = 1015;
  this.y[1001] = 240;
  this.player_width[1001] = 44;
  this.player_height[1001] = 44;
  this.tm[1001] = false;
  this.ey[1001] = this.y[1001];
  this.kerdi[1001] = 0;

  this.x[1002] = 4727;
  this.y[1002] = 400;
  this.player_width[1002] = 44;
  this.player_height[1002] = 44;
  this.tm[1002] = false;
  this.ey[1002] = this.y[1002];
  this.kerdi[1002] = 0;

  this.x[1003] = 4857;
  this.y[1003] = 220;
  this.player_width[1003] = 44;
  this.player_height[1003] = 44;
  this.tm[1003] = false;
  this.ey[1003] = this.y[1003];
  this.kerdi[1003] = 0;

  this.x[1004] = 4857;
  this.y[1004] = 400;
  this.player_width[1004] = 44;
  this.player_height[1004] = 44;
  this.tm[1004] = false;
  this.ey[1004] = this.y[1004];
  this.kerdi[1004] = 0;

  this.x[1005] = 4988;
  this.y[1005] = 400;
  this.player_width[1005] = 44;
  this.player_height[1005] = 44;
  this.tm[1005] = false;
  this.ey[1005] = this.y[1005];
  this.kerdi[1005] = 0;

  this.x[1006] = 972;
  this.y[1006] = 400;
  this.player_width[1006] = 44;
  this.player_height[1006] = 44;
  this.tm[1006] = false;
  this.ey[1006] = this.y[1006];
  this.kerdi[1006] = 0;

  this.x[1007] = 1060;
  this.y[1007] = 400;
  this.player_width[1007] = 44;
  this.player_height[1007] = 44;
  this.tm[1007] = false;
  this.ey[1007] = this.y[1007];
  this.kerdi[1007] = 0;

  this.x[1008] = 3495;
  this.y[1008] = 400;
  this.player_width[1008] = 44;
  this.player_height[1008] = 44;
  this.tm[1008] = false;
  this.ey[1008] = this.y[1008];
  this.kerdi[1008] = 0;

  this.x[1009] = 4192;
  this.y[1009] = 220;
  this.player_width[1009] = 44;
  this.player_height[1009] = 44;
  this.tm[1009] = false;
  this.ey[1009] = this.y[1009];
  this.kerdi[1009] = 0;

  this.x[1010] = 5757;
  this.y[1010] = 220;
  this.player_width[1010] = 44;
  this.player_height[1010] = 44;
  this.tm[1010] = false;
  this.ey[1010] = this.y[1010];
  this.kerdi[1010] = 0;

  this.x[1011] = 5801;
  this.y[1011] = 220;
  this.player_width[1011] = 44;
  this.player_height[1011] = 44;
  this.tm[1011] = false;
  this.ey[1011] = this.y[1011];
  this.kerdi[1011] = 0;

  this.x[1012] = 7570;
  this.y[1012] = 400;
  this.player_width[1012] = 44;
  this.player_height[1012] = 44;
  this.tm[1012] = false;
  this.ey[1012] = this.y[1012];
  this.kerdi[1012] = 0;

  this.x[1050] = 928;
  this.y[1050] = 400;
  this.player_width[1050] = 44;
  this.player_height[1050] = 44;
  this.tm[1050] = false;
  this.ey[1050] = this.y[1050];
  this.szt[1050] = false;

  this.x[1051] = 3451;
  this.y[1051] = 400;
  this.player_width[1051] = 44;
  this.player_height[1051] = 44;
  this.tm[1051] = false;
  this.ey[1051] = this.y[1051];
  this.szt[1051] = false;

  this.x[1052] = 3567;
  this.y[1052] = 220;
  this.player_width[1052] = 44;
  this.player_height[1052] = 44;
  this.tm[1052] = false;
  this.ey[1052] = this.y[1052];
  this.szt[1052] = false;

  this.x[1053] = 4060;
  this.y[1053] = 220;
  this.player_width[1053] = 44;
  this.player_height[1053] = 44;
  this.tm[1053] = false;
  this.ey[1053] = this.y[1053];
  this.szt[1053] = false;

  this.x[1054] = 4205;
  this.y[1054] = 400;
  this.player_width[1054] = 44;
  this.player_height[1054] = 44;
  this.tm[1054] = false;
  this.ey[1054] = this.y[1054];
  this.szt[1054] = false;

  this.x[1055] = 4466;
  this.y[1055] = 400;
  this.player_width[1055] = 44;
  this.player_height[1055] = 44;
  this.ey[1055] = this.y[1055];
  this.szt[1055] = false;

  this.x[1056] = 5249;
  this.y[1056] = 400;
  this.player_width[1056] = 44;
  this.player_height[1056] = 44;
  this.tm[1056] = false;
  this.ey[1056] = this.y[1056];
  this.szt[1056] = false;

  this.x[1057] = 5394;
  this.y[1057] = 220;
  this.player_width[1057] = 44;
  this.player_height[1057] = 44;
  this.tm[1057] = false;
  this.ey[1057] = this.y[1057];
  this.szt[1057] = false;

  this.x[1058] = 5713;
  this.y[1058] = 220;
  this.player_width[1058] = 44;
  this.player_height[1058] = 44;
  this.tm[1058] = false;
  this.ey[1058] = this.y[1058];
  this.szt[1058] = false;

  this.x[1059] = 5742;
  this.y[1059] = 400;
  this.player_width[1059] = 44;
  this.player_height[1059] = 44;
  this.tm[1059] = false;
  this.ey[1059] = this.y[1059];
  this.szt[1059] = false;

  this.x[1060] = 7482;
  this.y[1060] = 400;
  this.player_width[1060] = 44;
  this.player_height[1060] = 44;
  this.tm[1060] = false;
  this.ey[1060] = this.y[1060];
  this.szt[1060] = false;

  this.x[1061] = 1016;
  this.y[1061] = 400;
  this.player_width[1061] = 44;
  this.player_height[1061] = 44;
  this.tm[1061] = false;
  this.ey[1061] = this.y[1061];
  this.szt[1061] = false;

  this.x[1062] = 1104;
  this.y[1062] = 400;
  this.player_width[1062] = 44;
  this.player_height[1062] = 44;
  this.tm[1062] = false;
  this.ey[1062] = this.y[1062];
  this.szt[1062] = false;

  this.x[1063] = 3539;
  this.y[1063] = 400;
  this.player_width[1063] = 44;
  this.player_height[1063] = 44;
  this.tm[1063] = false;
  this.ey[1063] = this.y[1063];
  this.szt[1063] = false;

  this.x[1064] = 4510;
  this.y[1064] = 400;
  this.player_width[1064] = 44;
  this.player_height[1064] = 44;
  this.tm[1064] = false;
  this.ey[1064] = this.y[1064];
  this.szt[1064] = false;

  for (i = 1065; i <= 1071; i++) {
    this.x[i] = 3567 + (i - 1064) * 44;
    this.y[i] = 220;
    this.player_width[i] = 44;
    this.player_height[i] = 44;
    this.tm[i] = false;
    this.ey[i] = this.y[i];
    this.szt[i] = false;
  }

  for (i = 1072; i <= 1073; i++) {
    this.x[i] = 4060 + (i - 1071) * 44;
    this.y[i] = 220;
    this.player_width[i] = 44;
    this.player_height[i] = 44;
    this.tm[i] = false;
    this.ey[i] = this.y[i];
    this.szt[i] = false;
  }

  this.x[1074] = 5845;
  this.y[1074] = -220;
  this.player_width[1074] = 44;
  this.player_height[1074] = 44;
  this.tm[1074] = false;
  this.ey[1074] = this.y[1074];
  this.szt[74] = false;

  this.x[1075] = 5845;
  this.y[1075] = -220;
  this.player_width[1075] = 44;
  this.player_height[1075] = 44;
  this.tm[1075] = false;
  this.ey[1075] = this.y[1075];
  this.szt[1075] = false;

  this.x[1076] = 5845;
  this.y[1076] = 220;
  this.player_width[1076] = 44;
  this.player_height[1076] = 44;
  this.tm[1076] = false;
  this.ey[1076] = this.y[1076];
  this.szt[1076] = false;

  this.x[1077] = 5786;
  this.y[1077] = 400;
  this.player_width[1077] = 44;
  this.player_height[1077] = 44;
  this.tm[1077] = false;
  this.ey[1077] = this.y[1077];
  this.szt[1077] = false;

  this.x[1078] = 5482;
  this.y[1078] = 220;
  this.player_width[1078] = 44;
  this.player_height[1078] = 44;
  this.tm[1078] = false;
  this.ey[1078] = this.y[1078];
  this.szt[1078] = false;

  this.x[1079] = 7526;
  this.y[1079] = 400;
  this.player_width[1079] = 44;
  this.player_height[1079] = 44;
  this.tm[1079] = false;
  this.ey[1079] = this.y[1079];
  this.szt[1079] = false;

  this.x[1080] = 7614;
  this.y[1080] = 400;
  this.player_width[1080] = 44;
  this.player_height[1080] = 44;
  this.tm[1080] = false;
  this.ey[1080] = this.y[1080];
  this.szt[1080] = false;

  this.x[1081] = 5438;
  this.y[1081] = 220;
  this.player_width[1081] = 44;
  this.player_height[1081] = 44;
  this.tm[1081] = false;
  this.ey[1081] = this.y[1081];
  this.szt[1081] = false;

  this.x[1100] = 5974;
  this.y[1100] = 531;
  this.player_width[1100] = 44;
  this.player_height[1100] = 44;

  this.x[1101] = 6235;
  this.y[1101] = 531;
  this.player_width[1101] = 44;
  this.player_height[1101] = 44;

  this.x[1102] = 6583;
  this.y[1102] = 531;
  this.player_width[1102] = 44;
  this.player_height[1102] = 44;

  this.x[1103] = 6902;
  this.y[1103] = 531;
  this.player_width[1103] = 44;
  this.player_height[1103] = 44;

  this.x[1104] = 8070;
  this.y[1104] = 531;
  this.player_width[1104] = 44;
  this.player_height[1104] = 44;

  let ind = [];

  ind[1] = 0;
  ind[2] = 0;
  ind[3] = 0;
  ind[4] = 4;

  this.x[1105] = this.x[1100] + 3 * 44;
  this.y[1105] = this.y[1100];
  this.player_width[1105] = this.player_width[1100];
  this.player_height[1105] = this.player_height[1100];

  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++) {
      this.x[1106 + ind[1]] = this.x[1105] - (ind[2] * 44);
      this.y[1106 + ind[1]] = this.y[1105] - (ind[3] * 44);
      this.player_width[1106 + ind[1]] = this.player_width[1105 + ind[1]];
      this.player_height[1106 + ind[1]] = this.player_height[1105 + ind[1]];
      if (ind[2] < ind[4]) {
        ind[1]++;
      }
      ind[2]++;
    }
    ind[2] = 0;
    ind[3]++;
    ind[4]--;
  }

  ind[1] = 0;
  ind[2] = 0;
  ind[3] = 0;
  ind[4] = 4;


  this.x[1116] = this.x[1101];
  this.y[1116] = this.y[1101];
  this.player_width[1116] = this.player_width[1101];
  this.player_height[1116] = this.player_height[1101];

  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++) {
      this.x[1117 + ind[1]] = this.x[1116] + (ind[2] * 44);
      this.y[1117 + ind[1]] = this.y[1116] - (ind[3] * 44);
      this.player_width[1117 + ind[1]] = this.player_width[1116 + ind[1]];
      this.player_height[1117 + ind[1]] = this.player_height[1116 + ind[1]];
      if (ind[2] < ind[4]) {
        ind[1]++;
      }
      ind[2]++;
    }
    ind[2] = 0;
    ind[3]++;
    ind[4]--;
  }

  ind[1] = 0;
  ind[2] = 0;
  ind[3] = 0;
  ind[4] = 5;


  this.x[1127] = this.x[1102] + 4 * 44;
  this.y[1127] = this.y[1102];
  this.player_width[1127] = this.player_width[1102];
  this.player_height[1127] = this.player_height[1102];

  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 5; j++) {
      this.x[1128 + ind[1]] = this.x[1127] - (ind[2] * 44);
      this.y[1128 + ind[1]] = this.y[1127] - (ind[3] * 44);
      this.player_width[1128 + ind[1]] = this.player_width[1127 + ind[1]];
      this.player_height[1128 + ind[1]] = this.player_height[1127 + ind[1]];
      if (ind[2] < ind[4]) {
        ind[1]++;
      }
      ind[2]++;
    }
    ind[2] = 0;
    ind[3]++;
    ind[4]--;
  }

  ind[1] = 0;
  ind[2] = 0;
  ind[3] = 0;
  ind[4] = 4;


  this.x[1142] = this.x[1103];
  this.y[1142] = this.y[1103];
  this.player_width[1142] = this.player_width[1103];
  this.player_height[1142] = this.player_height[1103];

  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 4; j++) {
      this.x[1143 + ind[1]] = this.x[1142] + (ind[2] * 44);
      this.y[1143 + ind[1]] = this.y[1142] - (ind[3] * 44);
      this.player_width[1143 + ind[1]] = this.player_width[1142 + ind[1]];
      this.player_height[1143 + ind[1]] = this.player_height[1142 + ind[1]];
      if (ind[2] < ind[4]) {
        ind[1]++;
      }
      ind[2]++;
    }
    ind[2] = 0;
    ind[3]++;
    ind[4]--;
  }

  ind[1] = 0;
  ind[2] = 0;
  ind[3] = 0;
  ind[4] = 9;


  this.x[1153] = this.x[1104] + 8 * 44;
  this.y[1153] = this.y[1104];
  this.player_width[1153] = this.player_width[1104];
  this.player_height[1153] = this.player_height[1104];

  for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 9; j++) {
      this.x[1154 + ind[1]] = this.x[1153] - (ind[2] * 44);
      this.y[1154 + ind[1]] = this.y[1153] - (ind[3] * 44);
      this.player_width[1154 + ind[1]] = this.player_width[1153 + ind[1]];
      this.player_height[1154 + ind[1]] = this.player_height[1153 + ind[1]];
      if (ind[2] < ind[4]) {
        ind[1]++;
      }
      ind[2]++;
    }
    ind[2] = 0;
    ind[3]++;
    ind[4]--;
  }

  this.x[1198] = 8828;
  this.y[1198] = 531;
  this.player_width[1198] = 44;
  this.player_height[1198] = 44;


  this.x[1300] = 1305;
  this.y[1300] = 508;
  this.player_width[1300] = 88;
  this.player_height[1300] = 90;

  this.x[1301] = 7279;
  this.y[1301] = 508;
  this.player_width[1301] = 88;
  this.player_height[1301] = 90;

  this.x[1302] = 8004;
  this.y[1302] = 508;
  this.player_width[1302] = 88;
  this.player_height[1302] = 90;

  this.x[1350] = 1740;
  this.y[1350] = 484;
  this.player_width[1350] = 88;
  this.player_height[1350] = 137;

  this.x[1400] = 2117;
  this.y[1400] = 462;
  this.player_width[1400] = 88;
  this.player_height[1400] = 181;

  this.x[1401] = 2581;
  this.y[1401] = 462;
  this.player_width[1401] = 88;
  this.player_height[1401] = 181;

  this.tiltasj = false;
  this.tiltasb = false;
  this.felallase = false;
  this.fi = 0;
  this.fit = 0;
  this.kerd = 0;

  this.update = function() {

    jatekos.bottom = height + 100;
    gomba.bottom = height + 100;

    for (var j = 1; j <= ellenseg_gomba.x.length; j++) {
      ellenseg_gomba.bottom[j] = height + 100;
    }

    for (var j = 1; j <= ellenseg_kacsa.x.length; j++) {
      ellenseg_kacsa.bottom[j] = height + 100;
    }

    this.tiltasj = false;
    this.tiltasb = false;
    gomba.tiltasb = false;
    gomba.tiltasj = false;
    //print("fi: " + this.fi + "fit: " + this.fit);
    if (this.fi >= this.fit) {
      this.felallase = true;
    }

    this.fi = 0;
    this.fit = 0;

    for (let i = 0; i <= this.x.length - 1; i++) {
      if (abs(this.x[i] - jatekos.x) < 3000 && abs(this.y[i] - jatekos.y) < 800) {
        if (i >= 0 && i <= 230 || i >= 1000 && i <= 1012 || (i >= 1050 && i <= 1081 && this.szt[i] == false) || i >= 1100 && i <= 1198 || i >= 1300 && i <= 1302 || i >= 1350 && i <= 1350 || i >= 1400 && i <= 1401) {
          this.fit++;

          let jbo = jatekos.x - jatekos.player_width / 2;
          let jjo = jatekos.x + jatekos.player_width / 2;
          let jfo = jatekos.y - jatekos.player_height / 10;
          let jao = jatekos.y + jatekos.player_height / 2;

          let gbo = gomba.x - gomba.player_width / 2;
          let gjo = gomba.x + gomba.player_width / 2;
          let gfo = gomba.y - gomba.player_height / 2;
          let gao = gomba.y + gomba.player_height / 2;

          let fbo = this.x[i] - this.player_width[i] / 2;
          let fjo = this.x[i] + this.player_width[i] / 2;
          let ffo = this.y[i] - this.player_height[i] / 2;
          let fao = this.y[i] + this.player_height[i] / 2;

          if (gbo < fjo && gjo > fbo && gao <= ffo) {
            if (gomba.bottom > ffo) {
              gomba.bottom = ffo;
            }
          }


          if (jbo < fjo && jjo > fbo && jao <= ffo) {
            if (jatekos.bottom > ffo) {
              jatekos.bottom = ffo;
            }
          }

          if (jatekos.jump == true) {
            if (jbo < fjo && jjo > fbo && jao > ffo && jfo < fao) {
              jatekos.jumpCounter = 0;
              jatekos.jump = false;
            }
          }

          if (jatekos.crouch == true || this.felallase == false) {
            this.felallase = false;
            if (jfo - 20 > fao || jjo < fbo || jbo > fjo || jao <= ffo) {
              this.fi++;
            }
          }

          if (jbo - (jatekos.sebesseg_v2 + 8) < fjo && jjo + (jatekos.sebesseg_v2 + 8) > fbo && jao > ffo && jfo < fao) {
            if (jatekos.x < this.x[i]) {
              this.tiltasj = true;
            } else {
              this.tiltasb = true;
            }
          }

          for (var j = 1; j <= loves.l + 1; j++) {
            if (loves.lat[j] == true) {

              let lbo = loves.x[j] - loves.player_width[j] / 2;
              let ljo = loves.x[j] + loves.player_width[j] / 2;
              let lfo = loves.y[j] - loves.player_height[j] / 2;
              let lao = loves.y[j] + loves.player_height[j] / 2;

              if (lbo < fjo && ljo > fbo && lao > ffo && lfo < fao) {
                if (abs(loves.y[j] - ffo) < 12) {
                  loves.xe[j] = loves.x[j];
                  loves.ye[j] = loves.y[j];
                  loves.t[j] = 0;

                  if (loves.te[j] == false) {
                    loves.te[j] = true;
                    if (loves.sz[j] == 15) {
                      loves.sz[j] = -22;
                    } else {
                      loves.sz[j] = 202;
                    }
                  }

                } else {
                  loves.lat[j] = false;
                  loves.anim[j] = true;
                  loves.vx[j] = loves.x[j];
                  loves.vy[j] = loves.y[j];
                  loves.vm1[j] = 38 * 0.25;
                  loves.vm2[j] = 43 * 0.25;
                }
              }
            }
          }

          for (var j = 1; j <= ellenseg_gomba.x.length; j++) {
            let egbo = ellenseg_gomba.x[j] - ellenseg_gomba.player_width / 2;
            let egjo = ellenseg_gomba.x[j] + ellenseg_gomba.player_width / 2;
            let egfo = ellenseg_gomba.y[j] - ellenseg_gomba.player_height / 2;
            let egao = ellenseg_gomba.y[j] + ellenseg_gomba.player_height / 2;


            if (abs(this.x[jatekos.floor] - ellenseg_gomba.x[j]) < ellenseg_gomba.player_height / 2 && abs(this.y[jatekos.floor] - ellenseg_gomba.y[j]) < 100 && ellenseg_gomba.halott[j] == false) {
              pont_animacio.ai++;
              pont_animacio.x[pont_animacio.ai] = ellenseg_gomba.x[j];
              pont_animacio.y[pont_animacio.ai] = ellenseg_gomba.y[j];
              pont_animacio.ye[pont_animacio.ai] = ellenseg_gomba.y[j];
              pont_animacio.e[pont_animacio.ai] = 100;
              pont_animacio.l[pont_animacio.ai] = true;
              grafika.pont += pont_animacio.e[pont_animacio.ai];
              kilott_ellen_anim.i++;
              kilott_ellen_anim.xe[kilott_ellen_anim.i] = ellenseg_gomba.x[j];
              kilott_ellen_anim.ye[kilott_ellen_anim.i] = ellenseg_gomba.y[j];
              kilott_ellen_anim.l[kilott_ellen_anim.i] = true;
              kilott_ellen_anim.kg[kilott_ellen_anim.i] = "g";
              kilott_ellen_anim.t[kilott_ellen_anim.i] = 0;
              ellenseg_gomba.halott[j] = true;
              ellenseg_gomba.halotti[j] = millis() - 1;

              if (this.x[jatekos.floor] < ellenseg_gomba.x[j]) {
                kilott_ellen_anim.sz[kilott_ellen_anim.i] = -60;
              } else {
                kilott_ellen_anim.sz[kilott_ellen_anim.i] = 240;
              }

            }

            if (egbo < fjo && egjo > fbo && egao <= ffo) {
              if (ellenseg_gomba.bottom[j] > ffo) {
                ellenseg_gomba.bottom[j] = ffo;
              }
            }

            if (egbo - ellenseg_gomba.sebesseg_v2[j] < fjo && egjo + ellenseg_gomba.sebesseg_v2[j] > fbo && egao > ffo && egfo < fao) {
              if (ellenseg_gomba.x[j] < this.x[i]) {
                ellenseg_gomba.tiltasj[j] = true;
              } else {
                ellenseg_gomba.tiltasb[j] = true;
              }
            }

          }

          jatekos.floor = -1;

          for (var j = 1; j <= ellenseg_kacsa.x.length; j++) {
            let ekbo = ellenseg_kacsa.x[j] - ellenseg_kacsa.player_width / 2;
            let ekjo = ellenseg_kacsa.x[j] + ellenseg_kacsa.player_width / 2;
            let ekfo = ellenseg_kacsa.y[j] - ellenseg_kacsa.player_height / 2;
            let ekao = ellenseg_kacsa.y[j] + ellenseg_kacsa.player_height / 2;

            if (ekbo < fjo && ekjo > fbo && ekao <= ffo) {
              if (ellenseg_kacsa.bottom[j] > ffo) {
                ellenseg_kacsa.bottom[j] = ffo;
              }
            }

            if (ellenseg_kacsa.vh[j] == true) {
              ekbo -= 10;
              ekjo += 10;

            }

            if (ekbo - ellenseg_kacsa.sebesseg_v2[j] < fjo && ekjo + ellenseg_kacsa.sebesseg_v2[j] > fbo && ekao > ffo && ekfo < fao) {

              if (ellenseg_kacsa.vh[j] == true) {
                ellenseg_kacsa.vhms[j]  *= -1;
              }
              
              if (ellenseg_kacsa.x[j] < this.x[i]) {
                ellenseg_kacsa.tiltasj[j] = true;
              } else {
                ellenseg_kacsa.tiltasb[j] = true;
              }
            }

          }

          if (i >= 1050 && i <= 1081) {
            if (jatekos.mushroom == 0) {
              if (this.szt[i] == false) {
                if (this.tm[i] == true) {
                  if (this.y[i] >= this.ey[i] - 22) {
                    this.y[i] -= 4;
                  } else {
                    this.tm[i] = false;
                  }
                }
                if (this.tm[i] == false) {
                  if (this.y[i] != this.ey[i]) {
                    this.y[i] += 4
                  }
                }
              }
            }

            if (jatekos.mushroom > 0 || flower.felvett_virag == true) {
              if (this.tm[i] == true && this.szt[i] == false) {
                this.szt[i] = true;
                this.ni++;
                if (this.ni > 4) {
                  this.ni = 1;
                }
                switch (this.ni) {
                  case 1:
                    this.nx_1[1] = this.x[i] - 11;
                    this.ny_1[1] = this.y[i] - 11;
                    this.nx_1[2] = this.x[i] + 11;
                    this.ny_1[2] = this.y[i] - 11;
                    this.nx_1[3] = this.x[i] - 11;
                    this.ny_1[3] = this.y[i] + 11;
                    this.nx_1[4] = this.x[i] + 11;
                    this.ny_1[4] = this.y[i] + 11;
                    this.nxe_1[1] = this.nx_1[1];
                    this.nye_1[1] = this.ny_1[1];
                    this.nxe_1[2] = this.nx_1[2];
                    this.nye_1[2] = this.ny_1[2];
                    this.nxe_1[3] = this.nx_1[3];
                    this.nye_1[3] = this.ny_1[3];
                    this.nxe_1[4] = this.nx_1[4];
                    this.nye_1[4] = this.ny_1[4];
                    this.anim[1] = true;
                    this.t[1] = 0;
                    this.nei[1] = i;
                    break;
                  case 2:
                    this.nx_2[1] = this.x[i] - 11;
                    this.ny_2[1] = this.y[i] - 11;
                    this.nx_2[2] = this.x[i] + 11;
                    this.ny_2[2] = this.y[i] - 11;
                    this.nx_2[3] = this.x[i] - 11;
                    this.ny_2[3] = this.y[i] + 11;
                    this.nx_2[4] = this.x[i] + 11;
                    this.ny_2[4] = this.y[i] + 11;
                    this.nxe_2[1] = this.nx_2[1];
                    this.nye_2[1] = this.ny_2[1];
                    this.nxe_2[2] = this.nx_2[2];
                    this.nye_2[2] = this.ny_2[2];
                    this.nxe_2[3] = this.nx_2[3];
                    this.nye_2[3] = this.ny_2[3];
                    this.nxe_2[4] = this.nx_2[4];
                    this.nye_2[4] = this.ny_2[4];
                    this.anim[2] = true;
                    this.t[2] = 0;
                    this.nei[2] = i;
                    break;
                  case 3:
                    this.nx_3[1] = this.x[i] - 11;
                    this.ny_3[1] = this.y[i] - 11;
                    this.nx_3[2] = this.x[i] + 11;
                    this.ny_3[2] = this.y[i] - 11;
                    this.nx_3[3] = this.x[i] - 11;
                    this.ny_3[3] = this.y[i] + 11;
                    this.nx_3[4] = this.x[i] + 11;
                    this.ny_3[4] = this.y[i] + 11;
                    this.nxe_3[1] = this.nx_3[1];
                    this.nye_3[1] = this.ny_3[1];
                    this.nxe_3[2] = this.nx_3[2];
                    this.nye_3[2] = this.ny_3[2];
                    this.nxe_3[3] = this.nx_3[3];
                    this.nye_3[3] = this.ny_3[3];
                    this.nxe_3[4] = this.nx_3[4];
                    this.nye_3[4] = this.ny_3[4];
                    this.anim[3] = true;
                    this.t[3] = 0;
                    this.nei[3] = i;
                    break;
                  case 4:
                    this.nx_4[1] = this.x[i] - 11;
                    this.ny_4[1] = this.y[i] - 11;
                    this.nx_4[2] = this.x[i] + 11;
                    this.ny_4[2] = this.y[i] - 11;
                    this.nx_4[3] = this.x[i] - 11;
                    this.ny_4[3] = this.y[i] + 11;
                    this.nx_4[4] = this.x[i] + 11;
                    this.ny_4[4] = this.y[i] + 11;
                    this.nxe_4[1] = this.nx_4[1];
                    this.nye_4[1] = this.ny_4[1];
                    this.nxe_4[2] = this.nx_4[2];
                    this.nye_4[2] = this.ny_4[2];
                    this.nxe_4[3] = this.nx_4[3];
                    this.nye_4[3] = this.ny_4[3];
                    this.nxe_4[4] = this.nx_4[4];
                    this.nye_4[4] = this.ny_4[4];
                    this.anim[4] = true;
                    this.t[4] = 0;
                    this.nei[4] = i;
                    break;
                }

              }
            }
          }

          if (i >= 1000 && i <= 1012) {
            if (this.tm[i] == true && this.kerdi[i] == 1) {
              if (this.y[i] >= this.ey[i] - 22) {
                this.y[i] -= 4;
              } else {
                this.tm[i] = false;
              }
            }
            if (this.tm[i] == false) {
              if (this.y[i] != this.ey[i]) {
                this.y[i] += 4
              }
            }

          }

          if (jatekos.jump == true) {
            if (jbo < fjo && jjo > fbo && jao > ffo && jfo - jatekos.maxJumpSpeed < fao) {
              if ((i >= 1050 && i <= 1081) || (i >= 1000 && i <= 1012)) {
                if (penz.lathato == false) {
                  this.tm[i] = true;
                  this.ey[i] = this.y[i];
                  this.kerdi[i]++;
                  penz.x = this.x[i];
                  penz.y = this.y[i] - this.player_height[i] / 2 - penz.player_height / 2;
                  this.kerd = i;
                  if (this.kerdi[i] == 1 || (i >= 1050 && i <= 1081)) {
                    jatekos.floor = i;
                  }
                  //print(i);
                  penz.yelvartmin = this.y[i] - 150
                  penz.yelvartmax = this.y[i] - 70
                }
              }
              jatekos.jumpCounter = 0;
              jatekos.jump = false;
            }

          }

          if (jatekos.crouch == true || this.felallase == false) {
            this.felallase = false;
            if (jfo - 20 > fao || jjo < fbo || jbo > fjo || jao <= ffo) {
              this.fi++;
            }
          }

          if (jbo < fjo && jjo > fbo && jao > ffo && jfo < fao) {
            if (i >= 1050 && i <= 1081 || i >= 1000 && i <= 1012 || i >= 1100 && i <= 1198) {
                if (jatekos.x < this.x[i]) {
                  this.tiltasj = true;
                } else {
                  this.tiltasb = true;
                }
              }
            }

            if (gbo - gomba.sebesseg_v2 < fjo && gjo + gomba.sebesseg_v2 > fbo && gao > ffo && gfo < fao) {
              if (gomba.x < this.x[i]) {
                gomba.tiltasj = true;
              } else {
                gomba.tiltasb = true;
              }
            }

            if (i >= 0 && i < 1000) {
              image(this.p_padlo, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
            }


            if (i >= 1300 && i <= 1302) {
              image(this.p_kcs, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
            }

            if (i >= 1350 && i <= 1350) {
              image(this.p_kozcs, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
            }

            if (i >= 1400 && i <= 1401) {
              image(this.p_ncs, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
            }

            if (i >= 1100 && i <= 1198) {
              image(this.p_l, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
            }

            if (i >= 1000 && i <= 1012) {
              if (this.kerdi[i] == 0) {
                if (this.kerdsmillis <= millis()) {
                  this.kerdsmillis = millis() + 350
                  if (this.kerdl == false) {
                    this.kerdl = true;
                  } else {
                    this.kerdl = false;
                  }
                }

                if (this.kerdl == true) {
                  image(this.p_kerd, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
                } else {
                  image(this.p_kerds, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
                }

              } else {
                image(this.p_kerdu, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
              }
            }

            if (i >= 1050 && i <= 1081) {
              if (this.szt[i] == false) {
                image(this.p_t, this.x[i], this.y[i], this.player_width[i], this.player_height[i]);
              } else {



              }

            }

          }
        }
      }

      if (this.anim[1] == true) {
        this.t[1] += 0.2;

        this.nxe_1[1] += this.sebesseg_v2;
        this.nxe_1[2] += this.sebesseg_v2;
        this.nxe_1[3] += this.sebesseg_v2;
        this.nxe_1[4] += this.sebesseg_v2;

        this.nx_1[1] = this.nxe_1[1] + 60 * this.t[1] * cos(260);
        this.ny_1[1] = this.nye_1[1] + 60 * this.t[1] * sin(260) + 9.81 / 2 * sq(this.t[1]);
        this.nx_1[2] = this.nxe_1[2] + 60 * this.t[1] * cos(280);
        this.ny_1[2] = this.nye_1[2] + 60 * this.t[1] * sin(280) + 9.81 / 2 * sq(this.t[1]);
        this.nx_1[3] = this.nxe_1[3] + 50 * this.t[1] * cos(260);
        this.ny_1[3] = this.nye_1[3] + 50 * this.t[1] * sin(260) + 9.81 / 2 * sq(this.t[1]);
        this.nx_1[4] = this.nxe_1[4] + 50 * this.t[1] * cos(280);
        this.ny_1[4] = this.nye_1[4] + 50 * this.t[1] * sin(280) + 9.81 / 2 * sq(this.t[1]);



        image(this.ptt, this.nx_1[1], this.ny_1[1], 22, 22);
        image(this.ptt, this.nx_1[2], this.ny_1[2], 22, 22);
        image(this.ptt, this.nx_1[3], this.ny_1[3], 22, 22);
        image(this.ptt, this.nx_1[4], this.ny_1[4], 22, 22);
        if (this.ny_1[1] > height + 50) {
          this.anim[1] = false;
          this.t[1] = 0;
          this.nei[1] = -1;
        }
      }

      if (this.anim[2] == true) {
        this.t[2] += 0.2;

        this.nxe_2[1] += this.sebesseg_v2;
        this.nxe_2[2] += this.sebesseg_v2;
        this.nxe_2[3] += this.sebesseg_v2;
        this.nxe_2[4] += this.sebesseg_v2;

        this.nx_2[1] = this.nxe_2[1] + 60 * this.t[2] * cos(260);
        this.ny_2[1] = this.nye_2[1] + 60 * this.t[2] * sin(260) + 9.81 / 2 * sq(this.t[2]);
        this.nx_2[2] = this.nxe_2[2] + 60 * this.t[2] * cos(280);
        this.ny_2[2] = this.nye_2[2] + 60 * this.t[2] * sin(280) + 9.81 / 2 * sq(this.t[2]);
        this.nx_2[3] = this.nxe_2[3] + 50 * this.t[2] * cos(260);
        this.ny_2[3] = this.nye_2[3] + 50 * this.t[2] * sin(260) + 9.81 / 2 * sq(this.t[2]);
        this.nx_2[4] = this.nxe_2[4] + 50 * this.t[2] * cos(280);
        this.ny_2[4] = this.nye_2[4] + 50 * this.t[2] * sin(280) + 9.81 / 2 * sq(this.t[2]);
        image(this.ptt, this.nx_2[1], this.ny_2[1], 22, 22);
        image(this.ptt, this.nx_2[2], this.ny_2[2], 22, 22);
        image(this.ptt, this.nx_2[3], this.ny_2[3], 22, 22);
        image(this.ptt, this.nx_2[4], this.ny_2[4], 22, 22);
        if (this.ny_2[1] > height + 50) {
          this.anim[2] = false;
          this.t[2] = 0;
          this.nei[2] = -1;
        }
      }

      if (this.anim[3] == true) {
        this.t[3] += 0.2;

        this.nxe_3[1] += this.sebesseg_v2;
        this.nxe_3[2] += this.sebesseg_v2;
        this.nxe_3[3] += this.sebesseg_v2;
        this.nxe_3[4] += this.sebesseg_v2;

        this.nx_3[1] = this.nxe_3[1] + 60 * this.t[3] * cos(260);
        this.ny_3[1] = this.nye_3[1] + 60 * this.t[3] * sin(260) + 9.81 / 2 * sq(this.t[3]);
        this.nx_3[2] = this.nxe_3[2] + 60 * this.t[3] * cos(280);
        this.ny_3[2] = this.nye_3[2] + 60 * this.t[3] * sin(280) + 9.81 / 2 * sq(this.t[3]);
        this.nx_3[3] = this.nxe_3[3] + 50 * this.t[3] * cos(260);
        this.ny_3[3] = this.nye_3[3] + 50 * this.t[3] * sin(260) + 9.81 / 2 * sq(this.t[3]);
        this.nx_3[4] = this.nxe_3[4] + 50 * this.t[3] * cos(280);
        this.ny_3[4] = this.nye_3[4] + 50 * this.t[3] * sin(280) + 9.81 / 2 * sq(this.t[3]);
        image(this.ptt, this.nx_3[1], this.ny_3[1], 22, 22);
        image(this.ptt, this.nx_3[2], this.ny_3[2], 22, 22);
        image(this.ptt, this.nx_3[3], this.ny_3[3], 22, 22);
        image(this.ptt, this.nx_3[4], this.ny_3[4], 22, 22);
        if (this.ny_3[1] > height + 50) {
          this.anim[3] = false;
          this.t[3] = 0;
          this.nei[3] = -1;
        }
      }

      if (this.anim[4] == true) {
        this.t[4] += 0.2;

        this.nxe_4[1] += this.sebesseg_v2;
        this.nxe_4[2] += this.sebesseg_v2;
        this.nxe_4[3] += this.sebesseg_v2;
        this.nxe_4[4] += this.sebesseg_v2;

        this.nx_4[1] = this.nxe_4[1] + 60 * this.t[4] * cos(260);
        this.ny_4[1] = this.nye_4[1] + 60 * this.t[4] * sin(260) + 9.81 / 2 * sq(this.t[4]);
        this.nx_4[2] = this.nxe_4[2] + 60 * this.t[4] * cos(280);
        this.ny_4[2] = this.nye_4[2] + 60 * this.t[4] * sin(280) + 9.81 / 2 * sq(this.t[4]);
        this.nx_4[3] = this.nxe_4[3] + 50 * this.t[4] * cos(260);
        this.ny_4[3] = this.nye_4[3] + 50 * this.t[4] * sin(260) + 9.81 / 2 * sq(this.t[4]);
        this.nx_4[4] = this.nxe_4[4] + 50 * this.t[4] * cos(280);
        this.ny_4[4] = this.nye_4[4] + 50 * this.t[4] * sin(280) + 9.81 / 2 * sq(this.t[4]);
        image(this.ptt, this.nx_4[1], this.ny_4[1], 22, 22);
        image(this.ptt, this.nx_4[2], this.ny_4[2], 22, 22);
        image(this.ptt, this.nx_4[3], this.ny_4[3], 22, 22);
        image(this.ptt, this.nx_4[4], this.ny_4[4], 22, 22);
        if (this.ny_4[1] > height + 50) {
          this.anim[4] = false;
          this.t[4] = 0;
          this.nei[4] = -1;
        }
      }

    }
  }
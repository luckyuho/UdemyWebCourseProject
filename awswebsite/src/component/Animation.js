import React, { useEffect } from "react";

const Animation = () => {
  useEffect(() => {
    const text = document.querySelectorAll(".thePaths");
    const lastWord = document.querySelector("#w11");
    const animation = document.querySelector("div.animation");
    lastWord.addEventListener("animationend", () => {
      animation.style =
        "transition: all 1s ease; opacity: 0; pointer-events: none;";
    });
  });

  return (
    <div className="animation">
      <div className="logo">
        <svg
          width="91"
          height="99"
          viewBox="0 0 91 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w1"
            className="thePaths"
            d="M25.0883 3.9845L24.3894 2.63281H22.8677H9.37891H5.1491L7.18877 6.33835L37.5186 61.4395V94V96.5H40.0186H51.7983H54.2983V94V61.4395L84.6281 6.33835L86.6678 2.63281H82.438H69.0713H67.5514L66.8519 3.98211L45.9419 44.3124L25.0883 3.9845Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="69"
          height="95"
          viewBox="0 0 69 95"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w2"
            className="thePaths"
            d="M55.251 1.13281H54.251V2.13281V62.2524C54.251 66.7747 53.4172 70.4155 51.8178 73.2334C50.2091 76.0679 47.9615 78.1615 45.0573 79.5372L45.0526 79.5394C42.1617 80.927 38.7346 81.6382 34.7432 81.6382C30.7952 81.6382 27.3659 80.928 24.4306 79.5379C21.5686 78.1634 19.3397 76.0704 17.7295 73.2334C16.1302 70.4155 15.2964 66.7747 15.2964 62.2524V2.13281V1.13281H14.2964H2.63867H1.63867V2.13281V62.2524C1.63867 69.0641 3.07209 74.8165 6.00514 79.4499L6.00867 79.4554C8.96109 84.0527 12.9536 87.5158 17.9662 89.8326L17.9754 89.8367C23.0024 92.0989 28.5972 93.2207 34.7432 93.2207C40.6117 93.2207 46.0628 92.0961 51.0837 89.8367L51.0871 89.8352C56.1775 87.5214 60.2698 84.0633 63.345 79.4715C66.4504 74.8347 67.9697 69.0741 67.9697 62.2524V2.13281V1.13281H66.9697H55.251Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="73"
          height="93"
          viewBox="0 0 73 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w3"
            className="thePaths"
            d="M58.2778 2.13281V39.3408H15.478V2.13281V1.13281H14.478H2.69824H1.69824V2.13281V91V92H2.69824H14.478H15.478V91V50.9233H58.2778V91V92H59.2778H70.9966H71.9966V91V2.13281V1.13281H70.9966H59.2778H58.2778V2.13281Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="77"
          height="97"
          viewBox="0 0 77 97"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w4"
            className="thePaths"
            d="M23.6864 92.2034L23.6896 92.2048C28.2233 94.2198 33.185 95.2207 38.561 95.2207C44.0944 95.2207 49.1189 94.2218 53.6174 92.204C58.1501 90.1892 62.0351 87.2694 65.2644 83.4531C68.4946 79.6355 70.9543 75.0174 72.6568 69.6191C74.3613 64.2147 75.2056 58.1292 75.2056 51.374V45.7588C75.2056 39.0036 74.341 32.9366 72.5944 27.5704C70.8918 22.1736 68.412 17.5568 65.1419 13.7403C61.9135 9.88438 58.0288 6.94392 53.4951 4.92869C48.9968 2.91102 43.9723 1.91211 38.439 1.91211C33.063 1.91211 28.1012 2.91301 23.5675 4.92798L23.5643 4.9294C19.0711 6.94504 15.1882 9.88506 11.921 13.7381C8.65219 17.5524 6.13189 22.1667 4.34745 27.5614L4.346 27.5659C2.5985 32.9332 1.7334 39.0017 1.7334 45.7588V51.374C1.7334 58.1335 2.61945 64.2236 4.4085 69.6324C6.19326 75.0282 8.71418 79.6432 11.9839 83.4579L11.988 83.4627C15.2951 87.2721 19.1963 90.1892 23.6864 92.2034ZM59.9321 31.8503L59.932 31.8503L59.9345 31.8593C61.0052 35.8249 61.5479 40.4137 61.5479 45.6367V51.374C61.5479 56.64 61.0251 61.273 59.9929 65.2832C58.9607 69.2529 57.4424 72.5687 55.4571 75.2547L55.4556 75.2567C53.514 77.8973 51.1376 79.8839 48.3216 81.234C45.5063 82.5838 42.2603 83.272 38.561 83.272C35.0326 83.272 31.8673 82.5869 29.0468 81.2351C26.2683 79.8839 23.8449 77.8926 21.7766 75.2408C19.7518 72.552 18.1748 69.2346 17.0634 65.2657C15.9536 61.2618 15.3911 56.635 15.3911 51.374V45.6367C15.3911 40.4163 15.9536 35.8307 17.0631 31.8683C18.1756 27.8948 19.734 24.5964 21.7191 21.9485C23.7458 19.2991 26.1475 17.3093 28.9252 15.9586C31.7455 14.6069 34.9107 13.9219 38.439 13.9219C42.0958 13.9219 45.3218 14.6093 48.1385 15.9598L48.1432 15.9621C51.0016 17.314 53.4187 19.3027 55.4002 21.9447C57.3824 24.5877 58.9 27.8808 59.9321 31.8503Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <br />
        <svg
          width="119"
          height="121"
          viewBox="0 0 119 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w5"
            className="thePaths"
            d="M64.875 49.625H78.375V60.75H63.875H62.875V61.75V69.125V70.125H63.875H68.125V86.75C68.125 91.2396 68.602 94.5935 70.4756 96.7763C72.3911 99.008 75.5162 99.75 80 99.75H80.0096H80.0195H80.0295H80.0398H80.0502H80.0609H80.0717H80.0828H80.0941H80.1055H80.1172H80.1291H80.1411H80.1534H80.1659H80.1786H80.1914H80.2045H80.2177H80.2312H80.2448H80.2586H80.2726H80.2869H80.3013H80.3158H80.3306H80.3456H80.3607H80.3761H80.3916H80.4073H80.4232H80.4393H80.4556H80.472H80.4886H80.5054H80.5224H80.5395H80.5569H80.5744H80.5921H80.6099H80.628H80.6462H80.6646H80.6831H80.7018H80.7207H80.7398H80.759H80.7784H80.798H80.8177H80.8376H80.8577H80.8779H80.8983H80.9189H80.9396H80.9605H80.9815H81.0027H81.024H81.0456H81.0672H81.0891H81.111H81.1332H81.1554H81.1779H81.2005H81.2232H81.2461H81.2692H81.2924H81.3157H81.3392H81.3628H81.3866H81.4105H81.4346H81.4588H81.4832H81.5077H81.5323H81.5571H81.582H81.6071H81.6323H81.6576H81.6831H81.7087H81.7344H81.7603H81.7863H81.8124H81.8387H81.8651H81.8916H81.9183H81.9451H81.972H81.9991H82.0262H82.0535H82.0809H82.1085H82.1362H82.1639H82.1919H82.2199H82.248H82.2763H82.3047H82.3332H82.3618H82.3906H82.4194H82.4484H82.4775H82.5067H82.536H82.5654H82.5949H82.6246H82.6543H82.6842H82.7141H82.7442H82.7744H82.8046H82.835H82.8655H82.8961H82.9268H82.9576H82.9885H83.0195H83.0505H83.0817H83.113H83.1444H83.1759H83.2074H83.2391H83.2709H83.3027H83.3346H83.3667H83.3988H83.431H83.4633H83.4957H83.5282H83.5607H83.5934H83.6261H83.6589H83.6918H83.7248H83.7578H83.791H83.8242H83.8575H83.8909H83.9243H83.9578H83.9914H84.0251H84.0589H84.0927H84.1266H84.1606H84.1946H84.2287H84.2629H84.2972H84.3315H84.3659H84.4003H84.4348H84.4694H84.5041H84.5388H84.5735H84.6084H84.6433H84.6782H84.7132H84.7483H84.7834H84.8186H84.8539H84.8891H84.9245H84.9599H84.9954H85.0309H85.0664H85.102H85.1377H85.1734H85.2092H85.245H85.2808H85.3167H85.3527H85.3886H85.4247H85.4607H85.4969H85.533H85.5692H85.6054H85.6417H85.678H85.7144H85.7508H85.7872H85.8236H85.8601H85.8966H85.9332H85.9698H86.0064H86.043H86.0797H86.1164H86.1532H86.1899H86.2267H86.2635H86.3003H86.3372H86.3741H86.411H86.4479H86.4849H86.5218H86.5588H86.5958H86.6328H86.6699H86.7069H86.744H86.7811H86.8182H86.8553H86.8924H86.9295H86.9667H87.0038H87.041H87.0781H87.1153H87.1525H87.1897H87.2269H87.2641H87.3013H87.3385H87.3757H87.4129H87.4501H87.4873H87.5245H87.5617H87.5989H87.636H87.6732H87.7104H87.7476H87.7848H87.8219H87.8591H87.8962H87.9333H87.9705H88.0076H88.0447H88.0817H88.1188H88.1559H88.1929H88.2299H88.2669H88.3039H88.3409H88.3778H88.4148H88.4517H88.4886H88.5254H88.5623H88.5991H88.6359H88.6726H88.7094H88.7461H88.7828H88.8194H88.856H88.8926H88.9292H88.9657H89.0022H89.0387H89.0751H89.1115H89.1478H89.1841H89.2204H89.2567H89.2929H89.329H89.3651H89.4012H89.4373H89.4733H89.5092H89.5451H89.581H89.6168H89.6525H89.6883H89.7239H89.7595H89.7951H89.8306H89.8661H89.9015H89.9369H89.9722H90.0074H90.0426H90.0777H90.1128H90.1478H90.1828H90.2177H90.2525H90.2873H90.322H90.3567H90.3913H90.4258H90.4603H90.4947H90.529H90.5633H90.5975H90.6316H90.6656H90.6996H90.7335H90.7674H90.8011H90.8348H90.8684H90.902H90.9354H90.9688H91.0021H91.0354H91.0685H91.1016H91.1346H91.1675H91.2003H91.233H91.2657H91.2983H91.3308H91.3632H91.3955H91.4277H91.4598H91.4919H91.5238H91.5557H91.5875H91.6191H91.6507H91.6822H91.7136H91.7449H91.7761H91.8072H91.8382H91.8691H91.8999H91.9306H91.9612H91.9917H92.0221H92.0524H92.0826H92.1127H92.1427H92.1726H92.2023H92.232H92.2615H92.291H92.3203H92.3495H92.3786H92.4076H92.4365H92.4652H92.4939H92.5224H92.5508H92.5791H92.6072H92.6353H92.6632H92.691H92.7187H92.7463H92.7737H92.801H92.8282H92.8553H92.8822H92.909H92.9357H92.9623H92.9887H93.015H93.0411H93.0672H93.0931H93.1188H93.1445H93.17H93.1953H93.2205H93.2456H93.2705H93.2953H93.32H93.3445H93.3689H93.3931H93.4172H93.4412H93.465H93.4886H93.5122H93.5355H93.5587H93.5818H93.6047H93.6275H93.6501H93.6726H93.6949H93.717H93.739H93.7609H93.7826H93.8041H93.8255H93.8467H93.8678H93.8887H93.9094H93.93H93.9504H93.9707H93.9908H94.0107H94.0304H94.05H94.0695H94.0887H94.1078H94.1267H94.1455H94.1641H94.1825H94.2007H94.2188H94.2367H94.2544H94.2719H94.2893H94.3065H94.3235H94.3403H94.3569H94.3734H94.3897H94.4058H94.4217H94.4375H94.453H94.4684H94.4836H94.4986H94.5134H94.528H94.5424H94.5567H94.5707H94.5846H94.5982H94.6117H94.625H94.6448C96.1304 99.75 97.6238 99.75 98.9508 99.6701C100.265 99.5909 101.52 99.4292 102.484 99.0583L103.221 98.7751L103.116 97.9928C102.995 97.0805 102.871 95.7597 102.746 94.3782C102.735 94.2627 102.725 94.1467 102.714 94.0306C102.6 92.7723 102.484 91.4961 102.368 90.5082L102.238 89.3996L101.15 89.6506C99.6517 89.9964 96.386 90.125 94.5 90.125H94.4875H94.4747H94.4618H94.4487H94.4355H94.422H94.4084H94.3946H94.3806H94.3665H94.3521H94.3376H94.3229H94.3081H94.293H94.2778H94.2625H94.2469H94.2312H94.2153H94.1993H94.183H94.1666H94.1501H94.1334H94.1165H94.0994H94.0822H94.0648H94.0473H94.0296H94.0117H93.9937H93.9755H93.9571H93.9386H93.92H93.9012H93.8822H93.863H93.8438H93.8243H93.8047H93.785H93.7651H93.745H93.7248H93.7045H93.684H93.6634H93.6426H93.6216H93.6005H93.5793H93.5579H93.5364H93.5147H93.4929H93.471H93.4489H93.4267H93.4043H93.3818H93.3591H93.3363H93.3134H93.2904H93.2672H93.2439H93.2204H93.1968H93.1731H93.1492H93.1252H93.1011H93.0768H93.0525H93.0279H93.0033H92.9785H92.9536H92.9286H92.9035H92.8782H92.8528H92.8273H92.8017H92.7759H92.75H92.7241H92.6979H92.6717H92.6453H92.6189H92.5923H92.5656H92.5388H92.5118H92.4848H92.4576H92.4304H92.403H92.3755H92.3479H92.3202H92.2924H92.2644H92.2364H92.2083H92.18H92.1517H92.1232H92.0947H92.066H92.0372H92.0084H91.9794H91.9503H91.9212H91.8919H91.8625H91.8331H91.8035H91.7739H91.7441H91.7143H91.6843H91.6543H91.6242H91.594H91.5637H91.5333H91.5028H91.4722H91.4416H91.4108H91.38H91.3491H91.3181H91.287H91.2558H91.2245H91.1932H91.1618H91.1303H91.0987H91.067H91.0353H91.0035H90.9716H90.9396H90.9076H90.8754H90.8432H90.811H90.7786H90.7462H90.7137H90.6812H90.6485H90.6158H90.5831H90.5502H90.5173H90.4844H90.4513H90.4182H90.3851H90.3518H90.3185H90.2852H90.2518H90.2183H90.1847H90.1511H90.1175H90.0838H90.05H90.0162H89.9823H89.9483H89.9143H89.8803H89.8462H89.812H89.7778H89.7436H89.7093H89.6749H89.6405H89.606H89.5715H89.537H89.5024H89.4678H89.4331H89.3983H89.3636H89.3287H89.2939H89.259H89.224H89.1891H89.1541H89.119H89.0839H89.0488H89.0136H88.9784H88.9432H88.9079H88.8726H88.8372H88.8019H88.7665H88.731H88.6956H88.6601H88.6246H88.589H88.5534H88.5178H88.4822H88.4466H88.4109H88.3752H88.3395H88.3037H88.268H88.2322H88.1964H88.1606H88.1247H88.0889H88.053H88.0171H87.9812H87.9453H87.9093H87.8734H87.8374H87.8014H87.7654H87.7294H87.6934H87.6574H87.6214H87.5854H87.5493H87.5133H87.4772H87.4411H87.4051H87.369H87.333H87.2969H87.2608H87.2247H87.1887H87.1526H87.1165H87.0805H87.0444H87.0083H86.9723H86.9362H86.9002H86.8641H86.8281H86.7921H86.756H86.72H86.684H86.648H86.6121H86.5761H86.5402H86.5042H86.4683H86.4324H86.3965H86.3606H86.3248H86.2889H86.2531H86.2173H86.1815H86.1457H86.11H86.0743H86.0386H86.0029H85.9672H85.9316H85.896H85.8604H85.8249H85.7894H85.7539H85.7184H85.683H85.6476H85.6122H85.5769H85.5416H85.5063H85.4711H85.4358H85.4007H85.3655H85.3305H85.2954H85.2604H85.2254H85.1905H85.1555H85.1207H85.0859H85.0511H85.0164H84.9817H84.947H84.9124H84.8779H84.8434H84.8089H84.7745H84.7402H84.7058H84.6716H84.6374H84.6032H84.5691H84.5351H84.5011H84.4671H84.4332H84.3994H84.3656H84.3319H84.2982H84.2646H84.2311H84.1976H84.1642H84.1309H84.0976H84.0643H84.0312H83.9981H83.965H83.932H83.8991H83.8663H83.8335H83.8008H83.7682H83.7356H83.7031H83.6707H83.6384H83.6061H83.5739H83.5418H83.5097H83.4778H83.4459H83.414H83.3823H83.3506H83.3191H83.2876H83.2561H83.2248H83.1935H83.1624H83.1313H83.1003H83.0693H83.0385H83.0077H82.9771H82.9465H82.916H82.8856H82.8553H82.8251H82.795H82.7649H82.735H82.7052H82.6754H82.6458H82.6162H82.5867H82.5574H82.5281H82.4989H82.4699H82.4409H82.412H82.3833H82.3546H82.326H82.2976H82.2692H82.241H82.2128H82.1848H82.1568H82.129H82.1013H82.0737H82.0462H82.0188H81.9916H81.9644H81.9373H81.9104H81.8836H81.8569H81.8303H81.8038H81.7775H81.7512H81.7251H81.6991H81.6732H81.6475H81.6218H81.5963H81.5709H81.5456H81.5205H81.4955H81.4706H81.4458H81.4212H81.3967H81.3723H81.348H81.3239H81.2999H81.276H81.2523H81.2287H81.2052H81.1819H81.1587H81.1356H81.1127H81.0899H81.0673H81.0447H81.0224H81.0001H80.9781H80.9561H80.9343H80.9126H80.8911H80.8697H80.8485H80.8274H80.8064H80.7856H80.765H80.7445H80.7241H80.7039H80.6839H80.664H80.6442H80.6246H80.6052H80.5859H80.5668H80.5478H80.529H80.5103H80.4918H80.4734H80.4552H80.4372H80.4193H80.4016H80.3841H80.3667H80.3495H80.3324H80.3155H80.2988H80.2822H80.2658H80.2496H80.2335H80.2176H80.2019H80.1864H80.171H80.1558H80.1407H80.1259H80.1112H80.0967H80.0823H80.0682H80.0542H80.0404H80.0267H80.0133H80C78.9175 90.125 78.7058 89.8957 78.5937 89.7073C78.4976 89.5459 78.4014 89.2691 78.3372 88.7801C78.2737 88.296 78.25 87.677 78.25 86.875V70.125H103.875H104.875V69.125V61.75V60.75H103.875H88.5V49.625H103.125H104.125V48.625V41.25V40.25H103.125H95.2203C96.718 37.2912 98.3813 33.6427 100.041 30.0018C100.965 27.9754 101.888 25.9514 102.78 24.0499L103.26 23.0269L102.187 22.6748L94.5616 20.1748L93.5461 19.8418L93.2812 20.8772C91.9245 26.1806 88.9473 34.1247 86.7131 39.0896L86.2734 40.0666L86.7697 40.25H78.2099L78.7182 40.0643L79.4979 39.7794L79.3614 38.9606C78.5929 34.3495 76.1814 26.996 73.2568 21.5284L72.8514 20.7704L72.0412 21.0574L66.0412 23.1824L65.0045 23.5495L65.4683 24.5467C67.7001 29.3452 69.8214 35.7429 70.6596 40.25H64.875H63.875V41.25V48.625V49.625H64.875ZM51.625 8H50.625V9V60.5807C48.1717 54.701 44.7166 48.0849 41.2187 42.5881L40.7634 41.8727L39.9831 42.205L33.2331 45.08L32.172 45.5319L32.7698 46.5183C34.4761 49.3338 36.1658 52.4841 37.7134 55.6854C32.7572 55.9492 27.8932 56.1982 23.2703 56.4283C31.3993 45.8918 40.4091 32.4915 47.2243 21.5279L47.8226 20.5655L46.7931 20.0916L38.9181 16.4666L38.055 16.0693L37.6142 16.911C34.2818 23.2728 29.8007 30.9291 25.0051 38.3876C23.4556 36.3105 21.6153 34.1013 19.6345 31.8976C24.209 24.9222 29.3931 14.9762 33.6396 6.70681L34.1508 5.71127L33.1042 5.31485L24.8542 2.18984L23.9313 1.84025L23.5696 2.75848C21.0325 9.19879 16.8858 18.0905 13.0629 25.0934C12.0904 24.1539 11.1219 23.2464 10.172 22.3844L9.39954 21.6835L8.73178 22.4848L3.73178 28.4848L3.13576 29.2L3.80662 29.8456C9.25 35.0835 15.2459 41.9812 18.8903 47.5238C16.5143 50.925 14.1463 54.1341 11.8806 56.9822C8.84802 57.1263 6.01895 57.2581 3.45407 57.3761L2.37952 57.4255L2.50705 58.4936L3.50705 66.8686L3.61949 67.8102L4.56579 67.7478C9.44742 67.426 15.0115 67.0802 20.9503 66.7111C21.711 66.6639 22.4777 66.6162 23.25 66.5682V118V119H24.25H32.5H33.5V118V65.9254C36.2732 65.7493 39.0783 65.5688 41.8893 65.3839C42.8837 68.0429 43.6664 70.5141 44.1509 72.6011L44.2274 72.9308L43.4547 73.1696L36.5797 75.2946L35.5315 75.6186L35.951 76.6324C38.9241 83.8173 41.5206 93.229 42.2574 99.2466L42.4029 100.435L43.5464 100.08L50.625 97.8833V118.25V119.25H51.625H60.125H61.125V118.25V18.375H107V107.5C107 108.344 106.863 108.549 106.809 108.606C106.747 108.67 106.539 108.813 105.713 108.875C105.404 108.875 104.969 108.88 104.43 108.885C102.001 108.909 97.465 108.953 92.9194 108.751L91.2603 108.677L91.9713 110.178C93.0697 112.497 94.2728 116.135 94.5061 118.235L94.605 119.125H95.5C99.5666 119.125 102.975 119.063 105.782 118.841C108.579 118.619 110.849 118.235 112.609 117.558L112.633 117.549L112.656 117.539C114.522 116.71 115.819 115.554 116.611 113.842C117.376 112.186 117.625 110.1 117.625 107.5V9V8H116.625H112.5H111.5H108H107H51.625ZM45.5411 73.2843L50.625 70.9578V92.057C49.3642 86.3245 47.203 79.3832 44.6625 73.7159L44.6515 73.6914L45.5411 73.2843ZM11.172 73.5149L10.1394 73.3346L10.0079 74.3746C8.63547 85.2293 6.27653 96.3281 2.36445 103.785L1.87778 104.713L2.82711 105.156C3.23908 105.348 3.71013 105.563 4.21966 105.795C4.93227 106.119 5.72014 106.478 6.52683 106.858C7.89605 107.503 9.14163 108.13 9.8203 108.582L10.7628 109.21L11.2694 108.197C15.3424 100.051 18.2356 87.9236 19.8658 76.0106L19.9964 75.0557L19.047 74.8899L11.172 73.5149Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="122"
          height="114"
          viewBox="0 0 122 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w6"
            className="thePaths"
            d="M21 21.625H20V22.625V86.375V87.375H21H42.8139C34.1695 92.9534 17.5686 99.239 4.36567 102.784L2.63386 103.249L3.93964 104.478C6.02209 106.438 8.85886 109.645 10.325 111.6L10.7358 112.148L11.395 111.963C24.8227 108.198 41.9161 101.542 52.8953 94.854L54.1825 94.0699L52.9596 93.1887L44.8916 87.375H77.1188L76.6962 87.7657L70.0711 93.8907L68.8401 95.0289L70.4265 95.5712C85.005 100.555 99.8261 107.158 108.644 112.001L109.2 112.307L109.714 111.933L118.464 105.558L119.792 104.591L118.322 103.856C108.519 98.9542 92.4729 92.4368 77.6888 87.5505L77.1578 87.375H103.875H104.875V86.375V22.625V21.625H103.875H64.3743C65.3713 18.6619 66.3994 15.4007 67.3997 12.125H113.5H114.5V11.125V2.5V1.5H113.5H9.125H8.125V2.5V11.125V12.125H9.125H54.735C54.1152 15.2908 53.3403 18.6415 52.5359 21.625H21ZM31.75 49.625H92.875V59.125H31.75V49.625ZM31.75 68.375H92.875V77.875H31.75V68.375ZM31.75 31.125H92.875V40.375H31.75V31.125Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="117"
          height="120"
          viewBox="0 0 117 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w7"
            className="thePaths"
            d="M2.625 21.75H1.625V22.75V31.5V32.5H2.625H114.375H115.375V31.5V22.75V21.75H114.375H87.0735C90.4461 16.8933 93.9688 11.3856 97.1026 6.27256L97.7655 5.19104L96.5591 4.79897L86.5591 1.54897L85.7153 1.27473L85.3425 2.07988C82.6526 7.89015 78.0854 15.8631 74.014 21.75H42.6166L43.4678 21.4394L44.5098 21.0592L44.024 20.062C41.5954 15.077 36.2824 7.62415 31.3657 2.20319L30.9088 1.69942L30.2724 1.93923L21.6474 5.18923L20.2904 5.70056L21.2507 6.7872C25.1769 11.2301 29.3439 17.2093 31.7461 21.75H2.625ZM20.375 82V71.375H46.125V82H20.375ZM20.375 117.375V91.375H46.125V107.125C46.125 107.891 45.993 108.062 45.9491 108.105C45.8837 108.171 45.6564 108.317 44.8038 108.378C43.1143 108.498 37.4132 108.501 31.165 108.251L29.4326 108.182L30.2401 109.716C31.4603 112.034 32.7956 115.446 33.2715 117.706L33.4386 118.5H34.25H34.282C38.506 118.5 42.0327 118.5 44.9248 118.31C47.8108 118.121 50.1722 117.739 52.025 116.917C53.9372 116.096 55.2943 114.954 56.1404 113.299C56.9662 111.683 57.25 109.682 57.25 107.25V42.625V41.625H56.25H51.125H50.125H47.125H46.125H10.5H9.5V42.625V117.375V118.375H10.5H19.375H20.375V117.375ZM20.375 51.75H46.125V62H20.375V51.75ZM71.375 42.75H70.375V43.75V95.125V96.125H71.375H80.25H81.25V95.125V43.75V42.75H80.25H71.375ZM95.75 39V40V106.375C95.75 107.176 95.597 107.359 95.5249 107.423C95.3962 107.537 95.0568 107.69 94.0643 107.752C91.9872 107.874 85.2794 107.875 77.6578 107.626L75.9024 107.568L76.7488 109.107C78.0804 111.528 79.5417 115.432 80.0194 117.821L80.1802 118.625H81C85.8774 118.625 89.9081 118.563 93.2122 118.326C96.5078 118.089 99.1449 117.675 101.209 116.942L101.223 116.938L101.236 116.933C103.339 116.118 104.842 114.948 105.778 113.149C106.687 111.401 107 109.174 107 106.375V40V39H106H96.75H95.75Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="121"
          height="120"
          viewBox="0 0 121 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w8"
            className="thePaths"
            d="M46.125 46.375H45.125V47.375V55.875V56.875H46.125H75.4576C74.9014 60.0948 74.2382 63.484 73.5603 66.5H50H49V67.5V90.1963L48.9943 90.1429L48.1193 82.0179L48.0001 80.9118L46.9129 81.1478C43.2258 81.9481 39.5148 82.7609 35.8479 83.5641C35.593 83.62 35.3383 83.6757 35.0839 83.7315C37.8636 71.9351 40.8382 54.7681 42.9871 41.5353L43.14 40.5938L42.2067 40.3966L33.3317 38.5216L32.2201 38.2868L32.1283 39.4192C31.0066 53.253 28.0132 73.2031 25.2763 84.8971L25.0556 85.8403L25.2215 85.8848C16.8065 87.711 9.02727 89.3567 2.81636 90.517L1.77888 90.7108L2.02833 91.7364L4.27833 100.986L4.51387 101.955L5.48299 101.722C6.32364 101.521 7.18276 101.315 8.0588 101.106C19.6852 98.3217 34.2915 94.8242 48.2501 91.2182L49 91.0245V116.875V117.875H50H58.5H59.5V116.875V76.625H68.5V115.625V116.625H69.5H77H78V115.625V76.625H87.5V115.375V116.375H88.5H96.125H97.125V115.375V109.165L97.6162 110.093C98.6997 112.139 99.7841 115.162 100.139 117.289L100.278 118.125H101.125H101.169C103.945 118.125 106.267 118.125 108.238 117.933C110.217 117.74 111.917 117.347 113.446 116.521C114.915 115.85 115.872 114.815 116.432 113.379C116.971 111.994 117.125 110.275 117.125 108.25V67.5V66.5H116.125H113.25H112.25H107.625H106.625H84.8129C85.3865 64.7231 85.9739 62.8412 86.5713 60.9276C86.9907 59.5839 87.415 58.2246 87.8428 56.875H118.75H119.75V55.875V47.375V46.375H118.75H46.125ZM97.125 108.577V76.625H106.625V108.125C106.625 108.358 106.605 108.499 106.584 108.58C106.582 108.586 106.58 108.592 106.579 108.597C106.529 108.609 106.43 108.625 106.25 108.625H106.188L106.126 108.633C105.221 108.746 102.184 108.751 98.5345 108.626L97.125 108.577ZM106.621 108.583C106.621 108.583 106.619 108.584 106.617 108.585C106.619 108.583 106.621 108.583 106.621 108.583ZM77.5 1.25H76.5V2.25V28.75H61.25V8.375V7.375H60.25H51.5H50.5V8.375V38V39H51.5H114.5H115.5V38V8.375V7.375H114.5H105.5H104.5V8.375V28.75H87.5V2.25V1.25H86.5H77.5ZM5.375 26.125H4.375V27.125V35.75V36.75H5.375H44.875H45.875V35.75V27.125V26.125H44.875H30.625V3.625V2.625H29.625H21.125H20.125V3.625V26.125H5.375ZM7.95509 40.8895L6.93727 41.065L7.14554 42.0767C9.76098 54.7802 11.75 71.3354 11.75 82.25V83.4242L12.9092 83.2373L20.6592 81.9873L21.5097 81.8501L21.4999 80.9886C21.374 69.9049 19.2376 53.3344 16.351 40.4071L16.1434 39.4778L15.2051 39.6395L7.95509 40.8895Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="117"
          height="96"
          viewBox="0 0 117 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w9"
            className="thePaths"
            d="M9 1.125H8V2.125V11.875V12.875H9H51.875V83.125H2.375H1.375V84.125V93.5V94.5H2.375H114.75H115.75V93.5V84.125V83.125H114.75H64.375V12.875H108.5H109.5V11.875V2.125V1.125H108.5H9Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="123"
          height="118"
          viewBox="0 0 123 118"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w10"
            className="thePaths"
            d="M90.75 65.875H117.625H118.625V64.875V56.625V55.625H117.625H53H52V56.625V64.875V65.875H53H79.5V78.875H56H55V79.875V88V89H56H79.5V103.375H47.625H46.625V104.375V112.75V113.75H47.625H120.375H121.375V112.75V104.375V103.375H120.375H90.75V89H114.75H115.75V88V79.875V78.875H114.75H90.75V65.875ZM57.75 5.25H56.75V6.25V45.625V46.625H57.75H113.25H114.25V45.625V6.25V5.25H113.25H57.75ZM8.26164 21.2406C13.7321 20.4861 19.6397 19.5172 25.5 18.3526V35.25H6H5V36.25V45.125V46.125H6H23.8164C18.7611 60.0609 10.3676 75.4995 2.75671 83.956L2.20139 84.5731L2.70564 85.2325C4.28381 87.2962 6.47052 91.0739 7.30132 93.5662L7.87112 95.2757L9.02025 93.8877C14.7732 86.9394 20.6321 76.4199 25.5 65.3259V115.75V116.75H26.5H35.625H36.625V115.75V64.6888C40.4275 69.5177 44.4919 74.9813 46.262 78.0052L47.0244 79.3076L47.9266 78.0978L53.4266 70.7228L53.8885 70.1036L53.4059 69.5003C52.1172 67.8894 48.5142 64.0998 44.885 60.4083C41.7143 57.1832 38.4628 53.9714 36.625 52.2715V46.125H51.375H52.375V45.125V36.25V35.25H51.375H36.625V15.8665C42.2832 14.443 47.5743 12.8319 51.9981 11.0528L53.3358 10.5148L52.3632 9.45043L45.7382 2.20043L45.2431 1.65863L44.5778 1.9685C35.5936 6.15293 19.2246 9.63625 5.08419 12.0138L3.71803 12.2436L4.36621 13.4679C5.46747 15.548 6.67774 18.4652 7.15158 20.479L7.36004 21.365L8.26164 21.2406ZM67.5 15.375H103.125V36.5H67.5V15.375Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
        <svg
          width="114"
          height="120"
          viewBox="0 0 114 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="w11"
            className="thePaths"
            d="M4.75 20.875H2H1V21.875V114.25V115.25H2H10.5H11.5V114.25V106.75H40.75H41.75V105.75V68.125V67.125H40.75H11.5V57.625H39.625H40.625V56.625V21.875V20.875H39.625H22.623C24.8571 15.9158 27.1221 10.0517 29.062 4.84938L29.4944 3.68974L28.2698 3.51053L18.0198 2.01054L17.0806 1.87309L16.8944 2.80388C15.8596 7.97821 13.7783 15.1717 11.8169 20.875H11.5H10.5H5.75H4.75ZM30.125 47.375H11.5V31H30.125V47.375ZM11.5 96.75V77.25H31.375V96.75H11.5ZM44.5 8.625H43.5V9.625V18.25V19.25H44.5H72.375V32.625H49.25H48.25V33.625V99.25V100.25H49.25H57.875H58.875V99.25V43.125H72.375V117.875V118.875H73.375H82.25H83.25V117.875V43.125H97.875V89.25C97.875 89.7424 97.8024 89.8835 97.789 89.9057C97.762 89.9231 97.6127 90 97.125 90C96.0024 90 92.0129 90 87.2763 89.8753L85.5702 89.8304L86.3651 91.3407C87.579 93.6471 88.7731 97.0221 89.0055 99.2297L89.0997 100.125H90H90.0383C93.3821 100.125 96.1969 100.125 98.5345 99.9342C100.875 99.7431 102.842 99.3549 104.455 98.5156C106.146 97.668 107.261 96.4978 107.922 94.9174C108.564 93.3855 108.75 91.5352 108.75 89.375V33.625V32.625H107.75H104.375H103.375H98.875H97.875H83.25V19.25H111.375H112.375V18.25V9.625V8.625H111.375H44.5Z"
            stroke="blue"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
};

export default Animation;

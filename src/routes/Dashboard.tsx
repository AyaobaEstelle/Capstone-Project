import React from "react";

const Dashboard = () => {
  return (
    <div className=" dash-board">
      <div className="dash-board_content grid grid-flow-col auto-cols-max">
        <div className="side-nav">
          <h1 className="text-3xl text-neutral-primary-300">SCISSOR</h1>
          <a href="#">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 2H9C8.4 2 8 2.4 8 3V6C8 6.6 8.4 7 9 7H21C21.6 7 22 6.6 22 6V3C22 2.4 21.6 2 21 2ZM12 17H7V22H12V17ZM7 9.5H2V14.5H7V9.5ZM18 9.6H9.5V14.3H18V9.6Z"
                stroke="#626262"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Feed
          </a>
          <a href="#">
            <svg
              width="18"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 6V21.2417L7.19696 18.5404L7 18.456L6.80304 18.5404L0.5 21.2417V6C0.5 5.58379 0.642483 5.23962 0.941554 4.94055C1.24061 4.6415 1.58424 4.4995 1.99939 4.5H2H12C12.4162 4.5 12.7604 4.64248 13.0594 4.94155C13.3585 5.24061 13.5005 5.58424 13.5 5.99939V6ZM2 4H12C12.55 4 13.021 4.196 13.413 4.588C13.805 4.98 14.0007 5.45067 14 6L2 4ZM1.5 18.95V19.7093L2.19751 19.4093L7 17.3443L11.8025 19.4093L12.5 19.7093V18.95V6V5.5H12H2H1.5V6V18.95ZM17.5 2V18.5H16.5V2V1.5H16H3.5V0.5H16C16.4162 0.5 16.7604 0.642483 17.0594 0.941554C17.3585 1.24061 17.5005 1.58424 17.5 1.99939V2Z"
                fill="#626262"
                stroke="#626262"
              />
            </svg>
            Bookmarks
          </a>
          <a href="#">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.3172 14.404C16.7306 13.8169 16.0451 13.3377 15.2922 12.9883C16.354 12.1282 17.0313 10.8157 17.0313 9.34381C17.0313 6.74694 14.8657 4.61647 12.2688 4.65631C9.71178 4.69616 7.65162 6.77975 7.65162 9.34381C7.65162 10.8157 8.33131 12.1282 9.39068 12.9883C8.63765 13.3374 7.95214 13.8166 7.36568 14.404C6.086 15.686 5.35943 17.3782 5.31256 19.1829C5.31193 19.2079 5.31632 19.2328 5.32546 19.2561C5.33461 19.2794 5.34832 19.3006 5.36579 19.3185C5.38326 19.3364 5.40415 19.3506 5.42721 19.3604C5.45027 19.3701 5.47504 19.3751 5.50006 19.3751H6.81256C6.91334 19.3751 6.99771 19.2954 7.00006 19.1946C7.04459 17.8352 7.59537 16.5626 8.56334 15.5969C9.05867 15.099 9.64784 14.7042 10.2968 14.4355C10.9457 14.1667 11.6414 14.0294 12.3438 14.0313C13.7712 14.0313 15.1141 14.5868 16.1243 15.5969C17.0899 16.5626 17.6407 17.8352 17.6876 19.1946C17.6899 19.2954 17.7743 19.3751 17.8751 19.3751H19.1876C19.2126 19.3751 19.2374 19.3701 19.2604 19.3604C19.2835 19.3506 19.3044 19.3364 19.3218 19.3185C19.3393 19.3006 19.353 19.2794 19.3622 19.2561C19.3713 19.2328 19.3757 19.2079 19.3751 19.1829C19.3282 17.3782 18.6016 15.686 17.3172 14.404ZM12.3438 12.3438C11.5422 12.3438 10.7876 12.0321 10.2227 11.4649C9.93924 11.1837 9.71533 10.8482 9.56433 10.4786C9.41332 10.1089 9.33832 9.71262 9.34381 9.31334C9.35084 8.54459 9.65787 7.80162 10.1946 7.25084C10.7571 6.67428 11.5094 6.35319 12.3133 6.34381C13.1079 6.33678 13.879 6.64616 14.4462 7.20162C15.0274 7.77116 15.3462 8.53287 15.3462 9.34381C15.3462 10.1454 15.0344 10.8977 14.4672 11.4649C14.189 11.7445 13.858 11.9661 13.4935 12.117C13.1291 12.2679 12.7383 12.345 12.3438 12.3438ZM6.47271 9.96256C6.45162 9.75866 6.4399 9.55241 6.4399 9.34381C6.4399 8.97116 6.47506 8.60787 6.54068 8.25397C6.55709 8.16959 6.51256 8.08287 6.43521 8.04772C6.11646 7.90475 5.8235 7.70787 5.57037 7.45944C5.2721 7.17024 5.0374 6.82203 4.88123 6.43705C4.72505 6.05207 4.65085 5.63876 4.66334 5.2235C4.68443 4.47116 4.98678 3.75631 5.51412 3.21725C6.09303 2.62428 6.87115 2.30084 7.6985 2.31022C8.44615 2.31725 9.16803 2.60553 9.71412 3.11647C9.89928 3.28991 10.0587 3.48209 10.1922 3.68834C10.2391 3.761 10.3305 3.79147 10.4102 3.76334C10.8227 3.62037 11.2587 3.51959 11.7063 3.47272C11.8376 3.45866 11.9126 3.31803 11.854 3.20084C11.0922 1.69381 9.536 0.653187 7.736 0.625062C5.13678 0.585218 2.97115 2.71569 2.97115 5.31022C2.97115 6.78209 3.6485 8.09459 4.71021 8.95475C3.9649 9.29928 3.27818 9.77506 2.68287 10.3704C1.3985 11.6524 0.671934 13.3446 0.625059 15.1516C0.624433 15.1766 0.628821 15.2015 0.637963 15.2248C0.647105 15.2481 0.660817 15.2693 0.678291 15.2872C0.695764 15.3052 0.716646 15.3194 0.739706 15.3291C0.762766 15.3388 0.787536 15.3438 0.812559 15.3438H2.1274C2.22818 15.3438 2.31256 15.2641 2.3149 15.1633C2.35943 13.804 2.91021 12.5313 3.87818 11.5657C4.56725 10.8766 5.411 10.3985 6.33209 10.1665C6.4235 10.143 6.48443 10.0563 6.47271 9.96256Z"
                fill="#626262"
              />
            </svg>
            Team blogs
          </a>
          <a href="#">
            {" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93913 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17157 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93913 8.42143 5.92172 9.17157 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10C12.5304 10 13.0391 9.78929 13.4142 9.41421C13.7893 9.03914 14 8.53043 14 8C14 7.46957 13.7893 6.96086 13.4142 6.58579C13.0391 6.21071 12.5304 6 12 6ZM12 13C14.67 13 20 14.33 20 17V20H4V17C4 14.33 9.33 13 12 13ZM12 14.9C9.03 14.9 5.9 16.36 5.9 17V18.1H18.1V17C18.1 16.36 14.97 14.9 12 14.9Z"
                fill="#626262"
              />
            </svg>
            Accounts
          </a>
          <a href="#">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.99961 1C8.99961 0.734784 8.89426 0.48043 8.70672 0.292893C8.51919 0.105357 8.26483 0 7.99961 0C7.7344 0 7.48004 0.105357 7.29251 0.292893C7.10497 0.48043 6.99961 0.734784 6.99961 1V1.75H6.44261C5.37065 1.74993 4.33894 2.15839 3.55754 2.89224C2.77613 3.62608 2.30377 4.63014 2.23661 5.7L2.01561 9.234C1.93134 10.5814 1.47891 11.8799 0.707615 12.988C0.548248 13.2171 0.450872 13.4835 0.424957 13.7613C0.399043 14.0392 0.445471 14.319 0.559727 14.5736C0.673983 14.8281 0.852178 15.0488 1.07698 15.2142C1.30179 15.3795 1.56555 15.4838 1.84261 15.517L5.24961 15.925V17C5.24961 17.7293 5.53935 18.4288 6.05507 18.9445C6.5708 19.4603 7.27027 19.75 7.99961 19.75C8.72896 19.75 9.42843 19.4603 9.94416 18.9445C10.4599 18.4288 10.7496 17.7293 10.7496 17V15.925L14.1566 15.516C14.4335 15.4827 14.6971 15.3784 14.9218 15.2131C15.1464 15.0478 15.3245 14.8273 15.4388 14.5729C15.553 14.3184 15.5995 14.0388 15.5737 13.7611C15.5479 13.4834 15.4507 13.2171 15.2916 12.988C14.5203 11.88 14.0678 10.5815 13.9836 9.234L13.7626 5.701C13.6957 4.63096 13.2234 3.62665 12.442 2.8926C11.6606 2.15855 10.6287 1.74995 9.55661 1.75H8.99961V1ZM6.44261 3.25C5.75219 3.24992 5.08769 3.51297 4.58439 3.98561C4.0811 4.45825 3.77686 5.10493 3.73361 5.794L3.51361 9.328C3.41196 10.949 2.86753 12.511 1.93961 13.844C1.92808 13.8606 1.92103 13.8798 1.91915 13.8999C1.91727 13.92 1.92062 13.9403 1.92887 13.9587C1.93712 13.9771 1.95 13.9931 1.96625 14.005C1.9825 14.017 2.00158 14.0246 2.02161 14.027L5.75861 14.476C7.24761 14.654 8.75161 14.654 10.2406 14.476L13.9776 14.027C13.9977 14.0246 14.0167 14.017 14.033 14.005C14.0492 13.9931 14.0621 13.9771 14.0704 13.9587C14.0786 13.9403 14.082 13.92 14.0801 13.8999C14.0782 13.8798 14.0711 13.8606 14.0596 13.844C13.1321 12.5109 12.588 10.9489 12.4866 9.328L12.2656 5.794C12.2224 5.10493 11.9181 4.45825 11.4148 3.98561C10.9115 3.51297 10.247 3.24992 9.55661 3.25H6.44261ZM7.99961 18.25C7.30961 18.25 6.74961 17.69 6.74961 17V16.25H9.24961V17C9.24961 17.69 8.68961 18.25 7.99961 18.25Z"
                fill="#626262"
              />
            </svg>
            Notification
          </a>
          <a href="#" className="log-out">
            Log out
          </a>
        </div>
        <div className="main-content">
          <div className="top-bar">
            <div className="search">
              <svg
                width="21"
                height="22"
                viewBox="0 0 21 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.031 15.46L20.314 19.742L18.899 21.157L14.617 16.874C13.0237 18.1512 11.042 18.8459 9 18.843C4.032 18.843 0 14.811 0 9.84302C0 4.87502 4.032 0.843018 9 0.843018C13.968 0.843018 18 4.87502 18 9.84302C18.0029 11.885 17.3082 13.8668 16.031 15.46ZM14.025 14.718C15.2941 13.4129 16.0029 11.6634 16 9.84302C16 5.97602 12.867 2.84302 9 2.84302C5.133 2.84302 2 5.97602 2 9.84302C2 13.71 5.133 16.843 9 16.843C10.8204 16.8459 12.5699 16.1371 13.875 14.868L14.025 14.718Z"
                  fill="black"
                />
              </svg>
              <input type="text" placeholder="Search Scissor" />
            </div>
            <div className="bell">
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.99961 1C8.99961 0.734784 8.89426 0.48043 8.70672 0.292893C8.51919 0.105357 8.26483 0 7.99961 0C7.7344 0 7.48004 0.105357 7.29251 0.292893C7.10497 0.48043 6.99961 0.734784 6.99961 1V1.75H6.44261C5.37065 1.74993 4.33894 2.15839 3.55754 2.89224C2.77613 3.62608 2.30377 4.63014 2.23661 5.7L2.01561 9.234C1.93134 10.5814 1.47891 11.8799 0.707615 12.988C0.548248 13.2171 0.450872 13.4835 0.424957 13.7613C0.399043 14.0392 0.445471 14.319 0.559727 14.5736C0.673983 14.8281 0.852178 15.0488 1.07698 15.2142C1.30179 15.3795 1.56555 15.4838 1.84261 15.517L5.24961 15.925V17C5.24961 17.7293 5.53935 18.4288 6.05507 18.9445C6.5708 19.4603 7.27027 19.75 7.99961 19.75C8.72896 19.75 9.42843 19.4603 9.94416 18.9445C10.4599 18.4288 10.7496 17.7293 10.7496 17V15.925L14.1566 15.516C14.4335 15.4827 14.6971 15.3784 14.9218 15.2131C15.1464 15.0478 15.3245 14.8273 15.4388 14.5729C15.553 14.3184 15.5995 14.0388 15.5737 13.7611C15.5479 13.4834 15.4507 13.2171 15.2916 12.988C14.5203 11.88 14.0678 10.5815 13.9836 9.234L13.7626 5.701C13.6957 4.63096 13.2234 3.62665 12.442 2.8926C11.6606 2.15855 10.6287 1.74995 9.55661 1.75H8.99961V1ZM6.44261 3.25C5.75219 3.24992 5.08769 3.51297 4.58439 3.98561C4.0811 4.45825 3.77686 5.10493 3.73361 5.794L3.51361 9.328C3.41196 10.949 2.86753 12.511 1.93961 13.844C1.92808 13.8606 1.92103 13.8798 1.91915 13.8999C1.91727 13.92 1.92062 13.9403 1.92887 13.9587C1.93712 13.9771 1.95 13.9931 1.96625 14.005C1.9825 14.017 2.00158 14.0246 2.02161 14.027L5.75861 14.476C7.24761 14.654 8.75161 14.654 10.2406 14.476L13.9776 14.027C13.9977 14.0246 14.0167 14.017 14.033 14.005C14.0492 13.9931 14.0621 13.9771 14.0704 13.9587C14.0786 13.9403 14.082 13.92 14.0801 13.8999C14.0782 13.8798 14.0711 13.8606 14.0596 13.844C13.1321 12.5109 12.588 10.9489 12.4866 9.328L12.2656 5.794C12.2224 5.10493 11.9181 4.45825 11.4148 3.98561C10.9115 3.51297 10.247 3.24992 9.55661 3.25H6.44261ZM7.99961 18.25C7.30961 18.25 6.74961 17.69 6.74961 17V16.25H9.24961V17C9.24961 17.69 8.68961 18.25 7.99961 18.25Z"
                fill="black"
              />
            </svg>
            <img src="./images/picture.png" alt="" />
          </div>
          </div>
          <div className="content">
            <img src="./images/main-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
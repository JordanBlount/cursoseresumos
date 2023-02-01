export const Logo = ({ width = 203, height = 23 }: { width?: number; height?: number }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 203 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-[#3D3D3D] dark:fill-white"
        d="M9.05683 9.55904C9.51447 9.68108 9.95031 9.74209 10.3774 9.74209C11.6937 9.74209 12.3518 9.10576 12.3518 7.8331C12.3518 6.49942 11.8157 5.38801 10.7479 4.49453C9.68445 3.60105 8.24181 3.15649 6.42434 3.15649C4.60687 3.15649 3.08577 3.83641 1.84798 5.2006C0.61454 6.56043 0 8.59583 0 11.3068C0 13.0196 0.27894 14.5233 0.841179 15.8265C1.14191 16.5369 1.52545 17.1471 1.98745 17.6527C2.44944 18.1582 3.03783 18.5679 3.75697 18.8774C4.47612 19.1912 5.36088 19.3437 6.41562 19.3437C7.466 19.3437 8.54254 19.1127 9.64958 18.6507C10.7523 18.1887 11.6457 17.6178 12.33 16.9379C12.2516 16.5587 12.0511 16.1534 11.7242 15.7219C11.4017 15.2904 11.0661 14.9548 10.7174 14.7107C9.24861 15.7872 7.9803 16.3233 6.91248 16.3233C5.84467 16.3233 5.034 15.9006 4.47176 15.055C3.91388 14.2051 3.63058 12.9238 3.63058 11.2065C3.63058 9.48495 3.86158 8.17306 4.31485 7.2665C4.76813 6.35995 5.47856 5.90231 6.44613 5.90231C7.41806 5.90231 8.09362 6.23791 8.48152 6.90475C8.86506 7.56723 9.05683 8.3779 9.05683 9.3324V9.55904ZM28.9226 3.49645C28.4867 3.40492 27.9114 3.36134 27.201 3.36134C26.4862 3.36134 25.9066 3.40492 25.4489 3.49645V13.3509C25.4489 14.4405 25.2484 15.2512 24.8387 15.7785C24.429 16.3103 23.7666 16.5761 22.8513 16.5761C21.936 16.5761 21.2692 16.3103 20.8551 15.7785C20.4367 15.2512 20.2275 14.4405 20.2275 13.3509V5.54056C20.2275 4.0892 19.5476 3.36134 18.1834 3.36134H16.9151L16.7538 3.49645V13.3073C16.7538 15.2294 17.2856 16.7156 18.3447 17.766C19.4038 18.8164 20.9031 19.3437 22.8382 19.3437C24.7777 19.3437 26.277 18.8164 27.3361 17.766C28.3952 16.7156 28.9226 15.2294 28.9226 13.3073V3.49645ZM45.5195 8.26458C45.5195 6.64324 45.0227 5.42288 44.0246 4.59914C43.0221 3.77539 41.6972 3.36134 40.0497 3.36134C39.0211 3.36134 37.2341 3.39185 34.6932 3.45287L34.5319 3.60977V19.0038C34.9721 19.0953 35.5387 19.1389 36.2361 19.1389C36.9334 19.1389 37.5044 19.0953 37.962 19.0038V13.2376H39.0255C39.6008 13.2376 40.0366 13.364 40.333 13.6211C40.6294 13.8783 40.8516 14.2444 41.0042 14.7107L41.8672 17.1863C42.1243 17.9272 42.3945 18.4503 42.6822 18.7553C42.9698 19.0561 43.3795 19.2086 43.9069 19.2086C44.4386 19.2086 44.9137 19.1084 45.3408 18.9122C45.7636 18.7161 46.0905 18.4677 46.3171 18.1626C45.829 17.7834 45.4585 17.2342 45.2014 16.5064L44.4779 14.4841C44.0987 13.3814 43.5234 12.6928 42.7519 12.4182C43.4929 12.148 44.1379 11.638 44.6914 10.8971C45.2449 10.1561 45.5195 9.2801 45.5195 8.26458ZM37.962 5.97205C38.4153 5.98512 39.0211 5.99384 39.7751 5.99384C41.2439 5.99384 41.9805 6.75221 41.9805 8.26458C41.9805 9.77696 41.2439 10.5353 39.7751 10.5353C39.5659 10.5353 38.9601 10.5484 37.962 10.5789V5.97205ZM49.3332 17.6396C50.1525 18.1713 51.0722 18.5854 52.092 18.8905C53.1163 19.1912 54.0969 19.3437 55.034 19.3437C56.943 19.3437 58.4074 18.8992 59.4273 18.0057C60.4472 17.1122 60.9615 15.9485 60.9615 14.5102C60.9615 13.5383 60.6607 12.6753 60.0636 11.9082C59.4665 11.1455 58.621 10.5266 57.5314 10.0603L54.8074 8.92271C53.8703 8.51301 53.3996 8.00744 53.3996 7.40161C53.3996 7.02243 53.5652 6.68683 53.8964 6.39046C54.232 6.09844 54.7071 5.95025 55.3304 5.95025C56.5115 5.95025 57.8713 6.32072 59.4142 7.06166C60.129 6.3643 60.5213 5.49698 60.5954 4.45095C58.9304 3.58798 57.2481 3.15649 55.5439 3.15649C53.8398 3.15649 52.4669 3.5967 51.4252 4.47274C50.3792 5.35315 49.8562 6.47762 49.8562 7.85489C49.8562 9.68979 50.9327 11.0714 53.0814 12.0128L55.7619 13.146C56.773 13.5993 57.283 14.2051 57.283 14.9635C57.283 15.3993 57.113 15.7742 56.7687 16.088C56.4287 16.3974 55.9362 16.55 55.2824 16.55C53.8747 16.55 52.3492 16.0531 50.6973 15.055C50.3487 15.3427 50.0479 15.7219 49.7908 16.2013C49.5336 16.6764 49.3811 17.1558 49.3332 17.6396ZM68.3403 11.2501C68.3403 7.64133 69.3645 5.83693 71.413 5.83693C73.4658 5.83693 74.4901 7.64133 74.4901 11.2501C74.4901 14.8589 73.4658 16.6633 71.413 16.6633C69.3645 16.6633 68.3403 14.8589 68.3403 11.2501ZM67.1592 17.9142C68.3229 18.8687 69.7437 19.3437 71.4261 19.3437C73.1041 19.3437 74.5293 18.8687 75.693 17.9142C77.3143 16.5674 78.125 14.3446 78.125 11.2501C78.125 8.15562 77.3143 5.93282 75.693 4.58606C74.5293 3.63156 73.1041 3.15649 71.4261 3.15649C69.7437 3.15649 68.3229 3.63156 67.1592 4.58606C65.5378 5.93282 64.7272 8.15562 64.7272 11.2501C64.7272 14.3446 65.5378 16.5674 67.1592 17.9142Z"
      />
      <path d="M81.875 0H202.5V22.5H81.875V0Z" fill="#037A76" />
      <path
        className="fill-white dark:fill-dark"
        d="M86.25 19.0337C86.705 19.1256 87.287 19.1694 87.9914 19.1694C88.7002 19.1694 89.2821 19.1256 89.7371 19.0337V3.46628C89.2821 3.37439 88.7002 3.33064 87.9914 3.33064C87.287 3.33064 86.705 3.37439 86.25 3.46628V19.0337ZM107.593 7.30782C107.234 6.20524 106.565 5.26892 105.576 4.49448C105.103 4.11383 104.473 3.82505 103.686 3.62816C102.894 3.4269 102.141 3.33064 101.428 3.33064C99.4241 3.33064 97.5471 3.36127 95.797 3.42252L95.6395 3.58004V18.92L95.797 19.0775C98.4441 19.1387 100.22 19.1694 101.131 19.1694C102.045 19.1694 102.894 19.0775 103.686 18.885C104.473 18.6968 105.103 18.4124 105.576 18.0318C106.578 17.2573 107.256 16.3123 107.606 15.2053C107.956 14.094 108.131 12.777 108.131 11.25C108.131 9.72301 107.952 8.41041 107.593 7.30782ZM99.6517 16.4348C99.3016 16.4348 99.1179 16.4435 99.1047 16.4567V6.04335L101.428 6.06523C103.511 6.06523 104.552 7.79786 104.552 11.2631C104.552 14.724 103.511 16.4567 101.428 16.4567L99.6517 16.4348ZM116.492 14.6365V12.6282H121.598C121.734 12.2345 121.804 11.7532 121.804 11.18C121.804 10.6112 121.734 10.143 121.598 9.77989H118.019C117.398 9.77989 116.89 9.78864 116.492 9.80176V8.0035L116.47 6.38463H122.784C122.968 5.85084 123.06 5.32142 123.06 4.78763C123.06 4.25821 123.02 3.8163 122.942 3.46628H113.211L113.053 3.62816V17.0517C113.053 17.6905 113.233 18.1893 113.587 18.5568C113.946 18.92 114.436 19.1037 115.057 19.1037H121.213C122.487 19.1037 123.23 18.5393 123.445 17.4149C123.488 17.1436 123.515 16.7323 123.515 16.1854H118.133C117.696 16.1854 117.14 16.1985 116.47 16.2291V16.2073L116.492 14.6365ZM132.082 15.7041H135.319C135.761 15.7041 136.085 15.6997 136.299 15.6822L136.776 17.3492C136.978 18.0755 137.227 18.5743 137.529 18.8412C137.835 19.1037 138.334 19.2394 139.034 19.2394C139.734 19.2394 140.334 19.095 140.837 18.8062L135.91 3.48815C135.394 3.38315 134.733 3.33064 133.928 3.33064C133.123 3.33064 132.449 3.37439 131.902 3.46628L126.84 18.7581L126.976 18.9418C127.387 19.1081 127.929 19.1912 128.595 19.1912C129.264 19.1912 129.771 19.1475 130.122 19.0556L131.128 15.6822C131.338 15.6997 131.657 15.7041 132.082 15.7041ZM131.924 12.9695L132.563 10.8737C133.154 8.82169 133.521 7.42596 133.657 6.68215H133.771L135.503 12.9695C135.394 12.9695 135.245 12.9651 135.048 12.9608C134.847 12.952 134.711 12.9476 134.637 12.9476H132.882L131.924 12.9695ZM150.703 16.0935C150.051 16.0935 149.342 16.1154 148.585 16.1635V5.51831C148.585 4.06132 147.898 3.33064 146.533 3.33064H145.256L145.098 3.46628V17.0517C145.098 17.6905 145.278 18.1893 145.645 18.5568C146.008 18.92 146.503 19.1037 147.124 19.1037H152.366C153.705 19.1037 154.466 18.5306 154.645 17.393C154.707 17.0298 154.737 16.5967 154.737 16.0935H150.703ZM162.74 6.34087H162.762L164.175 6.36275H164.971C165.61 6.36275 166.074 6.24462 166.362 6.00835C166.651 5.77208 166.796 5.38705 166.796 4.85763C166.796 4.32384 166.734 3.86006 166.612 3.46628H155.446C155.367 3.90818 155.332 4.38947 155.332 4.91451C155.332 5.43955 155.367 5.92084 155.446 6.36275H157.861L159.274 6.34087H159.296L159.274 8.02538V19.0337C159.747 19.1256 160.324 19.1694 161.016 19.1694C161.707 19.1694 162.289 19.1256 162.762 19.0337V8.02538L162.74 6.34087ZM174.247 14.6365V12.6282H179.353C179.488 12.2345 179.558 11.7532 179.558 11.18C179.558 10.6112 179.488 10.143 179.353 9.77989H175.774C175.152 9.77989 174.645 9.78864 174.247 9.80176V8.0035L174.225 6.38463H180.539C180.722 5.85084 180.814 5.32142 180.814 4.78763C180.814 4.25821 180.775 3.8163 180.696 3.46628H170.965L170.808 3.62816V17.0517C170.808 17.6905 170.987 18.1893 171.342 18.5568C171.7 18.92 172.19 19.1037 172.812 19.1037H178.968C180.241 19.1037 180.985 18.5393 181.199 17.4149C181.243 17.1436 181.269 16.7323 181.269 16.1854H175.888C175.45 16.1854 174.894 16.1985 174.225 16.2291V16.2073L174.247 14.6365ZM194.124 9.55237C194.579 9.67488 195.021 9.73613 195.445 9.73613C196.767 9.73613 197.427 9.09734 197.427 7.81974C197.427 6.48088 196.894 5.36517 195.822 4.46823C194.75 3.57128 193.301 3.125 191.477 3.125C189.657 3.125 188.125 3.80755 186.887 5.17703C185.649 6.54214 185.028 8.58542 185.028 11.3069C185.028 13.0264 185.308 14.5359 185.872 15.8441C186.174 16.5573 186.559 17.1698 187.023 17.6774C187.487 18.1849 188.077 18.5962 188.799 18.9068C189.521 19.2219 190.409 19.375 191.468 19.375C192.523 19.375 193.608 19.1431 194.715 18.6793C195.826 18.2155 196.723 17.6424 197.405 16.9598C197.327 16.5792 197.125 16.1723 196.802 15.7391C196.473 15.3059 196.137 14.969 195.787 14.724C194.312 15.8047 193.039 16.3429 191.967 16.3429C190.899 16.3429 190.081 15.9185 189.517 15.0697C188.957 14.2165 188.677 12.9301 188.677 11.2062C188.677 9.47799 188.904 8.16101 189.359 7.25094C189.814 6.34087 190.527 5.88146 191.503 5.88146C192.474 5.88146 193.153 6.21836 193.542 6.88779C193.927 7.55284 194.124 8.36665 194.124 9.32485V9.55237Z"
      />
    </svg>
  )
}

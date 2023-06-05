import Header from "../Header/Header";
import ExtraHeader from "../Header/ExtraHeader";
import Footer from "../Footer/Footer";
import DonjetaImage from "../Images/Donjeta.jpg";
import BleonaImage from "../Images/Bleona.jpg";
import GresaImage from "../Images/Gresa.jpg";
const Home = () => {
  return (
    <div>
      <Header></Header>

      <section id="hero" class="d-flex align-items-center">
        <div class="container">
          <h1>Mirë se vini në E-Patient</h1>
          <h2>
            Ne aspirojmë të rrisim nivelin e njohurive<br></br> në fushën e
            mjekësisë dhe mirëqenies në nivel vendi.
          </h2>
          <a href="#about" class="btn-get-started scrollto">
            Shfletoni
          </a>
        </div>
      </section>

      <div>
        <section id="why-us" class="why-us">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 d-flex align-items-stretch">
                <div class="content">
                  <h3>Pse E-Patient?</h3>
                  <p>
                    Platforma ePatient do të mundësojë postimin e blog posteve
                    nga doktorët dhe pacientët. Përveç posteve, artikujt me
                    zhvillimet më të fundit mjekësore nga organizata të ndryshme
                    shëndetësore do të kenë vendin e tyre të veçantë në
                    platformën ePatient. Gjithashtu, përmes kësaj platforme do
                    të mund të organizohen
                  </p>
                  <div class="text-center">
                    <a href="#" class="more-btn">
                      Lexo më shumë <i class="bx bx-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8 d-flex align-items-stretch">
                <div class="icon-boxes d-flex flex-column justify-content-center">
                  <div class="row">
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-receipt"></i>
                        <h4>Komunikim </h4>
                        <p>
                          Ne do të synojmë të ofrojmë shërbime kualitative,
                          sidomos për personat të cilët nuk kanë
                          diagnostifikimin e duhur për sëmundjet e tyre, duke u
                          mundësuar atyre komunikim të drejtpërdrejt me doktorë
                          nga anë e mbanë bota.
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-cube-alt"></i>
                        <h4>Grupe Suportuese</h4>
                        <p>
                          Gjithashtu, një fokus të veçantë i kemi kushtuar edhe
                          krijimit të ambienteve të përshtatshme për personat te
                          cilët kanë të njëjtën diagnozë mjekësore. Këtyre
                          personave do t’u ofrohet pjesëmarrje në grupe të
                          hapura për diskutim të problemeve që ata hasin si dhe
                          do t’u krijohet një ambient motivues e mbështetës për
                          të gjithë ata.
                        </p>
                      </div>
                    </div>
                    <div class="col-xl-4 d-flex align-items-stretch">
                      <div class="icon-box mt-4 mt-xl-0">
                        <i class="bx bx-images"></i>
                        <h4>Forume</h4>
                        <p>
                          Ne aspirojmë të rrisim nivelin e njohurive në fushën e
                          mjekësisë dhe mirëqenies në nivel vendi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="about" class="about">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                <a
                  href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                  class="glightbox play-btn mb-4"
                ></a>
              </div>

              <div class="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic
                  accusamus. Non ipsam et sed minima temporibus laudantium.
                  Soluta voluptate sed facere corporis dolores excepturi. Libero
                  laboriosam sint et id nulla tenetur. Suscipit aut voluptate.
                </p>

                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-fingerprint"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p class="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi sint occaecati cupiditate non provident
                  </p>
                </div>

                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-gift"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p class="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>

                <div class="icon-box">
                  <div class="icon">
                    <i class="bx bx-atom"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Dine Pad</a>
                  </h4>
                  <p class="description">
                    Explicabo est voluptatum asperiores consequatur magnam. Et
                    veritatis odit. Sunt aut deserunt minus aut eligendi omnis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="services" class="services">
          <div class="container">
            <div class="section-title">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="icon-box">
                  <div class="icon">
                    <i class="fas fa-heartbeat"></i>
                  </div>
                  <h4>
                    <a href="">Lorem Ipsum</a>
                  </h4>
                  <p>
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="icon-box">
                  <div class="icon">
                    <i class="fas fa-pills"></i>
                  </div>
                  <h4>
                    <a href="">Sed ut perspiciatis</a>
                  </h4>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="icon-box">
                  <div class="icon">
                    <i class="fas fa-hospital-user"></i>
                  </div>
                  <h4>
                    <a href="">Magni Dolores</a>
                  </h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="fas fa-dna"></i>
                  </div>
                  <h4>
                    <a href="">Nemo Enim</a>
                  </h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="fas fa-wheelchair"></i>
                  </div>
                  <h4>
                    <a href="">Dele cardo</a>
                  </h4>
                  <p>
                    Quis consequatur saepe eligendi voluptatem consequatur dolor
                    consequuntur
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div class="icon-box">
                  <div class="icon">
                    <i class="fas fa-notes-medical"></i>
                  </div>
                  <h4>
                    <a href="">Divera don</a>
                  </h4>
                  <p>
                    Modi nostrum vel laborum. Porro fugit error sit minus
                    sapiente sit aspernatur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="counts" class="counts">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="count-box">
                  <i class="fas fa-user-md"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="85"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Doctors</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div class="count-box">
                  <i class="far fa-hospital"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="18"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Departments</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fas fa-flask"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="12"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Research Labs</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div class="count-box">
                  <i class="fas fa-award"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="150"
                    data-purecounter-duration="1"
                    class="purecounter"
                  ></span>
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="departments" class="departments">
          <div class="container">
            <div class="section-title">
              <h2>Departments</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row gy-4">
              <div class="col-lg-3">
                <ul class="nav nav-tabs flex-column">
                  <li class="nav-item">
                    <a
                      class="nav-link active show"
                      data-bs-toggle="tab"
                      href="#tab-1"
                    >
                      Cardiology
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
                      Neurology
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
                      Hepatology
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
                      Pediatrics
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" href="#tab-5">
                      Eye Care
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-9">
                <div class="tab-content">
                  <div class="tab-pane active show" id="tab-1">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Cardiology</h3>
                        <p class="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Et nobis maiores eius. Voluptatibus ut enim blanditiis
                          atque harum sint. Laborum eos ipsum ipsa odit magni.
                          Incidunt hic ut molestiae aut qui. Est repellat minima
                          eveniet eius et quis magni nihil. Consequatur dolorem
                          quaerat quos qui similique accusamus nostrum rem vero
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-1.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-2">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p class="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Ea ipsum voluptatem consequatur quis est. Illum error
                          ullam omnis quia et reiciendis sunt sunt est. Non
                          aliquid repellendus itaque accusamus eius et velit
                          ipsa voluptates. Optio nesciunt eaque beatae accusamus
                          lerode pakto madirna desera vafle de nideran pal
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-2.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-3">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Impedit facilis occaecati odio neque aperiam sit
                        </h3>
                        <p class="fst-italic">
                          Eos voluptatibus quo. Odio similique illum id quidem
                          non enim fuga. Qui natus non sunt dicta dolor et. In
                          asperiores velit quaerat perferendis aut
                        </p>
                        <p>
                          Iure officiis odit rerum. Harum sequi eum illum
                          corrupti culpa veritatis quisquam. Neque
                          necessitatibus illo rerum eum ut. Commodi ipsam minima
                          molestiae sed laboriosam a iste odio. Earum odit
                          nesciunt fugiat sit ullam. Soluta et harum voluptatem
                          optio quae
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-3.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-4">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Fuga dolores inventore laboriosam ut est accusamus
                          laboriosam dolore
                        </h3>
                        <p class="fst-italic">
                          Totam aperiam accusamus. Repellat consequuntur iure
                          voluptas iure porro quis delectus
                        </p>
                        <p>
                          Eaque consequuntur consequuntur libero expedita in
                          voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                          debitis quis velit. Eum ex maxime error in consequatur
                          corporis atque. Eligendi asperiores sed qui veritatis
                          aperiam quia a laborum inventore
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-4.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab-5">
                    <div class="row gy-4">
                      <div class="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p class="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p>
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div class="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-5.jpg"
                          alt=""
                          class="img-fluid"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="doctors" class="doctors">
          <div class="container">
            <div class="section-title">
              <h2>Doctors</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-6">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="assets/img/doctors/doctors-1.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div class="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Medical Officer</span>
                    <p>
                      Explicabo voluptatem mollitia et repellat qui dolorum
                      quasi
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4 mt-lg-0">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="assets/img/doctors/doctors-2.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div class="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Anesthesiologist</span>
                    <p>
                      Aut maiores voluptates amet et quis praesentium qui senda
                      para
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="assets/img/doctors/doctors-3.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div class="member-info">
                    <h4>William Anderson</h4>
                    <span>Cardiology</span>
                    <p>
                      Quisquam facilis cum velit laborum corrupti fuga rerum
                      quia
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 mt-4">
                <div class="member d-flex align-items-start">
                  <div class="pic">
                    <img
                      src="assets/img/doctors/doctors-4.jpg"
                      class="img-fluid"
                      alt=""
                    ></img>
                  </div>
                  <div class="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Neurosurgeon</span>
                    <p>
                      Dolorum tempora officiis odit laborum officiis et et
                      accusamus
                    </p>
                    <div class="social">
                      <a href="">
                        <i class="ri-twitter-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-facebook-fill"></i>
                      </a>
                      <a href="">
                        <i class="ri-instagram-fill"></i>
                      </a>
                      <a href="">
                        {" "}
                        <i class="ri-linkedin-box-fill"></i>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section id="faq" class="faq section-bg">
          <div class="container">
            <div class="section-title">
              <h2>Frequently Asked Questions</h2>
              <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas.
              </p>
            </div>

            <div class="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    class="collapse"
                    data-bs-target="#faq-list-1"
                  >
                    Non consectetur a erat nam at lectus urna duis?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-1"
                    class="collapse show"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="100">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-2"
                    class="collapsed"
                  >
                    Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-2"
                    class="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-3"
                    class="collapsed"
                  >
                    Dolor sit amet consectetur adipiscing elit?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-3"
                    class="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-4"
                    class="collapsed"
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor
                    consequat? <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-4"
                    class="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Molestie a iaculis at erat pellentesque adipiscing
                      commodo. Dignissim suspendisse in est ante in. Nunc vel
                      risus commodo viverra maecenas accumsan. Sit amet nisl
                      suscipit adipiscing bibendum est. Purus gravida quis
                      blandit turpis cursus in.
                    </p>
                  </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                  <i class="bx bx-help-circle icon-help"></i>{" "}
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-list-5"
                    class="collapsed"
                  >
                    Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                    turpis nunc eget lorem dolor?{" "}
                    <i class="bx bx-chevron-down icon-show"></i>
                    <i class="bx bx-chevron-up icon-close"></i>
                  </a>
                  <div
                    id="faq-list-5"
                    class="collapse"
                    data-bs-parent=".faq-list"
                  >
                    <p>
                      Laoreet sit amet cursus sit amet dictum sit amet justo.
                      Mauris vitae ultricies leo integer malesuada nunc vel.
                      Tincidunt eget nullam non nisi est sit amet. Turpis nunc
                      eget lorem dolor sed. Ut venenatis tellus in metus
                      vulputate eu scelerisque.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <section id="testimonials" class="testimonials">
        <div class="container">
          <div
            class="testimonials-slider swiper"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      class="testimonial-img"
                      alt=""
                    ></img>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="testimonial-wrap">
                  <div class="testimonial-item">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      class="testimonial-img"
                      alt=""
                    ></img>
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                      <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section id="gallery" class="gallery">
        <div class="container">
          <div class="section-title">
            <h2>Gallery</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row g-0">
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-1.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-1.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-2.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-2.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-3.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-3.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-4.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-4.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-5.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-5.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-6.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-6.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-7.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-7.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="col-lg-3 col-md-4">
              <div class="gallery-item">
                <a
                  href="assets/img/gallery/gallery-8.jpg"
                  class="galelry-lightbox"
                >
                  <img
                    src="assets/img/gallery/gallery-8.jpg"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="instructors" className="p-5">
        <div className="container">
          <h2 className="text-center text-black">Ekipa jonë</h2>
          <p className="lead text-center text-black mb-5">
            <strong>
              Një ekip profesioniste dhe me përvojë shumë vjeçare!
            </strong>
          </p>
          <div className="row g-3 ">
            <div className="col-md-6 col-lg-4  ">
              <div className="card bg-light">
                <div className="card-body text-center ">
                  <img
                    src={BleonaImage}
                    className="rounded-circle mb-3 mt-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3 ">Bleona Bajrami</h3>
                  <p className="card-text">
                    Studente në kolegjin UBT, në drejtimin Shkenca Kompjuterike
                    dhe Inxhinieri.
                  </p>

                  <a href="https://www.facebook.com/bleona.bajrami.54922">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/bleona-bajrami-969bb9214/">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="https://www.instagram.com/bleeona.bajrammi/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    src={DonjetaImage}
                    className="rounded-circle mb-3 mt-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Donjetë Zogaj</h3>
                  <p className="card-text">
                    Studente në kolegjin UBT, në drejtimin Shkenca Kompjuterike
                    dhe Inxhinieri.
                  </p>

                  <a href="https://www.facebook.com/donjetezogaj/">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/donjet%C3%ABzogaj/">
                    <i className="bi bi-linkedin text-dark mx-1"></i>
                  </a>
                  <a href="https://www.instagram.com/donjezo/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <img
                    
                    className="rounded-circle mb-3 mt-3"
                    alt=""
                  />
                  <h3 className="card-title mb-3">Fatbardhë Zogaj</h3>
                  <p className="card-text">
                    Studente në kolegjin UBT, në drejtimin Shkenca Kompjuterike
                    dhe Inxhinieri.
                  </p>

                  <a href="https://www.facebook.com/gresa.berisha.9041">
                    <i className="bi bi-facebook text-dark mx-1"></i>
                  </a>
                  <a href="https://www.instagram.com/gresaaberiisha/">
                    <i className="bi bi-instagram text-dark mx-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};
export default Home;

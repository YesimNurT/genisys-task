import { navigate } from "../../../../utils/navigation.util";

const testParams = [
  {
    dataName: "footer-kredi-hesaplama-araclari",
    routeParam: "footerkredihesaplama",
  },
  { dataName: "footer-cerez-politikasi", routeParam: "footerçerez" },
  {
    dataName: "footer-kisisel-verilerin-korunmasi",
    routeParam: "footerkişiselveri",
  },
  {
    dataName: "footer-hesapkurdu-hakkinda",
    routeParam: "footerhkhakkında",
  },
  { dataName: "footer-kariyer", routeParam: "footerkariyer" },
  { dataName: "footer-iletisim", routeParam: "footeriletişim" },
  {
    dataName: "footer-gizlilik-politikasi-ve-kullanim-sartlari",
    routeParam: "footergizlilikpolitikası",
  },
];

const testFooter = (data, controlParam) => {
  it(`${data} `, () => {
    navigate("ccbase");

    cy.fixture("routes").then(function (routes) {
      cy.get(`[data-cy="${data}"]`)
        .should("have.attr", "href")
        .and("include", routes[controlParam]);
    });
  });
};

export function footer() {
  describe("Footer", () => {
    testParams.map((item) => {
      testFooter(item.dataName, item.routeParam);
    });

    it("Linkedln", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-linkedin"]`)

        .should("have.attr", "href")
        .and("include", `https://www.linkedin.com/company/hesapkurdu`);
    });

    it("Facebook", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-facebook"]`)
        .should("have.attr", "href")
        .and("include", `https://www.facebook.com/hesapkurdu`);
    });

    it("İnstagram", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-instagram"]`)
        .should("have.attr", "href")
        .and("include", `https://www.instagram.com/hesapkurducom`);
    });

    it("Twitter", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-twitter"]`)
        .should("have.attr", "href")
        .and("include", `https://twitter.com/HesapKurduCom`);
    });

    it("Youtube", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-youtube"]`)
        .should("have.attr", "href")
        .and("include", `https://www.youtube.com/c/hesapkurdu`);
    });

    it("Medium", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-medium"]`)
        .should("have.attr", "href")
        .and("include", "https://medium.com/hesapkurdu-development");
    });

    it("Hesapkurdulogo", () => {
      navigate("ccbase");
      cy.get(`[data-cy="footer-hk-logo"]`).should("be.visible");
    });
  });
}

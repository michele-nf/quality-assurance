describe("the-internet", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/")
  })

  it('o h1 contém o texto correto', () => {
    cy.get('h1').contains('Welcome to the-internet')
  })

  context("Exemplos disponíveis", () => {
    it("os recursos da página inicial estão corretos", () => {
      cy.get("li").eq(0).contains("A/B Testing")
      cy.get("li").eq(1).contains("Add/Remove Elements")
      cy.get("li").eq(2).contains("Basic Auth")
      cy.get("li").eq(3).contains("Broken Images")
      cy.get("li").eq(4).contains("Challenging DOM")
      cy.get("li").eq(5).contains("Checkboxes")
      cy.get("li").eq(6).contains("Context Menu")
      cy.get("li").eq(7).contains("Digest Authentication")
      cy.get("li").eq(8).contains("Disappearing Elements")
      cy.get("li").eq(9).contains("Drag and Drop")
      cy.get("li").eq(10).contains("Dropdown")
      cy.get("li").eq(11).contains("Dynamic Content")
      cy.get("li").eq(12).contains("Dynamic Controls")
      cy.get("li").eq(13).contains("Dynamic Loading")
      cy.get("li").eq(14).contains("Entry Ad")
      cy.get("li").eq(15).contains("Exit Intent")
      cy.get("li").eq(16).contains("File Download")
      cy.get("li").eq(17).contains("File Upload")
      cy.get("li").eq(18).contains("Floating Menu")
      cy.get("li").eq(19).contains("Forgot Password")
      cy.get("li").eq(20).contains("Form Authentication")
      cy.get("li").eq(21).contains("Frames")
      cy.get("li").eq(22).contains("Geolocation")
      cy.get("li").eq(23).contains("Horizontal Slider")
      cy.get("li").eq(24).contains("Hovers")
      cy.get("li").eq(25).contains("Infinite Scroll")
      cy.get("li").eq(26).contains("Inputs")
      cy.get("li").eq(27).contains("JQuery UI Menus")
      cy.get("li").eq(28).contains("JavaScript Alerts")
      cy.get("li").eq(29).contains("JavaScript onload event error")
      cy.get("li").eq(30).contains("Key Presses")
      cy.get("li").eq(31).contains("Large & Deep DOM")
      cy.get("li").eq(32).contains("Multiple Windows")
      cy.get("li").eq(33).contains("Nested Frames")
      cy.get("li").eq(34).contains("Notification Messages")
      cy.get("li").eq(35).contains("Redirect Link")
      cy.get("li").eq(36).contains("Secure File Download")
      cy.get("li").eq(37).contains("Shadow DOM")
      cy.get("li").eq(38).contains("Shifting Content")
      cy.get("li").eq(39).contains("Slow Resources")
      cy.get("li").eq(40).contains("Sortable Data Tables")
      cy.get("li").eq(41).contains("Status Codes")
      cy.get("li").eq(42).contains("Typos")
      cy.get("li").eq(43).contains("WYSIWYG Editor")
    })
  })

  context("Acessa as páginas dos exemplos", () => {
    it("exemplo: A/B Testing", () => {
      cy.get(":nth-child(1) > a").click()
      cy.location("pathname").should("equal", "/abtest")
    })

    it("exemplo: Add/Remove Elements", () => {
      cy.get("ul > :nth-child(2) > a").click()
      cy.location("pathname").should("equal", "/add_remove_elements/")
    })

    // it("exemplo: Basic Auth", () => {
    //   cy.get(":nth-child(3) > a").click()
    //   cy.location("pathname").should("equal", "/basic_auth")
    // })

    it("exemplo: Broken Images", () => {
      cy.get(":nth-child(4) > a").click()
      cy.location("pathname").should("equal", "/broken_images")
    })

    it("exemplo: Challenging DOM", () => {
      cy.get(":nth-child(5) > a").click()
      cy.location("pathname").should("equal", "/challenging_dom")
    })

    it("exemplo: Checkboxes", () => {
      cy.get(":nth-child(6) > a").click()
      cy.location("pathname").should("equal", "/checkboxes")
    })

    it("exemplo: Context Menu", () => {
      cy.get(":nth-child(7) > a").click()
      cy.location("pathname").should("equal", "/context_menu")
    })

    // it("exemplo: Digest Authentication", () => {
    //   cy.get(":nth-child(8) > a").click()
    //   cy.location("pathname").should("equal", "/digest_auth")
    // })

    it("exemplo: Disappearing Elements", () => {
      cy.get(":nth-child(9) > a").click()
      cy.location("pathname").should("equal", "/disappearing_elements")
    })

    it("exemplo: Drag and Drop", () => {
      cy.get(":nth-child(10) > a").click()
      cy.location("pathname").should("equal", "/drag_and_drop")
    })

    it("exemplo: Dropdown", () => {
      cy.get(":nth-child(11) > a").click()
      cy.location("pathname").should("equal", "/dropdown")
    })

    it("exemplo: Dynamic Content", () => {
      cy.get(":nth-child(12) > a").click()
      cy.location("pathname").should("equal", "/dynamic_content")
    })

    it("exemplo: Dynamic Controls", () => {
      cy.get(":nth-child(13) > a").click()
      cy.location("pathname").should("equal", "/dynamic_controls")
    })

    it("exemplo: Dynamic Loading", () => {
      cy.get(":nth-child(14) > a").click()
      cy.location("pathname").should("equal", "/dynamic_loading")
    })

    it("exemplo: Entry Ad", () => {
      cy.get(":nth-child(15) > a").click()
      cy.location("pathname").should("equal", "/entry_ad")
    })

    it("exemplo: Exit Intent", () => {
      cy.get(":nth-child(16) > a").click()
      cy.location("pathname").should("equal", "/exit_intent")
    })

    it("exemplo: File Download", () => {
      cy.get(":nth-child(17) > a").click()
      cy.location("pathname").should("equal", "/download")
    })

    it("exemplo: File Upload", () => {
      cy.get(":nth-child(18) > a").click()
      cy.location("pathname").should("equal", "/upload")
    })

    it("exemplo: Floating Menu", () => {
      cy.get(":nth-child(19) > a").click()
      cy.location("pathname").should("equal", "/floating_menu")
    })

    it("exemplo: Forgot Password", () => {
      cy.get(":nth-child(20) > a").click()
      cy.location("pathname").should("equal", "/forgot_password")
    })

    it("exemplo: Form Authentication", () => {
      cy.get(":nth-child(21) > a").click()
      cy.location("pathname").should("equal", "/login")
    })

    it("exemplo: Form Authentication", () => {
      cy.get(":nth-child(21) > a").click()
      cy.location("pathname").should("equal", "/login")
    })

    it("exemplo: Frames", () => {
      cy.get(":nth-child(22) > a").click()
      cy.location("pathname").should("equal", "/frames")
    })

    it("exemplo: Geolocation", () => {
      cy.get(":nth-child(23) > a").click()
      cy.location("pathname").should("equal", "/geolocation")
    })

    it("exemplo: Horizontal Slider", () => {
      cy.get(":nth-child(24) > a").click()
      cy.location("pathname").should("equal", "/horizontal_slider")
    })

    it("exemplo: Hovers", () => {
      cy.get(":nth-child(25) > a").click()
      cy.location("pathname").should("equal", "/hovers")
    })

    it("exemplo: Infinite Scroll", () => {
      cy.get(":nth-child(26) > a").click()
      cy.location("pathname").should("equal", "/infinite_scroll")
    })

    it("exemplo: Inputs", () => {
      cy.get(":nth-child(27) > a").click()
      cy.location("pathname").should("equal", "/inputs")
    })

    it("exemplo: JQuery UI Menus", () => {
      cy.get(":nth-child(28) > a").click()
      cy.location("pathname").should("equal", "/jqueryui/menu")
    })

    it("exemplo: JavaScript Alerts", () => {
      cy.get(":nth-child(29) > a").click()
      cy.location("pathname").should("equal", "/javascript_alerts")
    })

    it("exemplo: JavaScript onload event error", () => {
      cy.on("uncaught:exception", (err, runnable) => {
        // Ignorar os erros para continuar com o teste
        return false;
      });
      cy.get(":nth-child(30) > a").click()
      cy.location("pathname").should("equal", "/javascript_error")
    })

    it("exemplo: Key Presses", () => {
      cy.get(":nth-child(31) > a").click()
      cy.location("pathname").should("equal", "/key_presses")
    })

    it("exemplo: Large & Deep DOM", () => {
      cy.get(":nth-child(32) > a").click()
      cy.location("pathname").should("equal", "/large")
    })

    it("exemplo: Multiple Windows", () => {
      cy.get(":nth-child(33) > a").click()
      cy.location("pathname").should("equal", "/windows")
    })

    it("exemplo: Nested Frames", () => {
      cy.get(":nth-child(34) > a").click()
      cy.location("pathname").should("equal", "/nested_frames")
    })

    it("exemplo: Notification Messages", () => {
      cy.get(":nth-child(35) > a").click()
      cy.location("pathname").should("equal", "/notification_message_rendered")
    })

    it("exemplo: Redirect Link", () => {
      cy.get(":nth-child(36) > a").click()
      cy.location("pathname").should("equal", "/redirector")
    })

    // it("exemplo: Secure File Download", () => {
    //   cy.get(":nth-child(37) > a").click()
    //   cy.location("pathname").should("equal", "/download_secure")
    // })

    it("exemplo: Shadow DOM", () => {
      cy.get(":nth-child(38) > a").click()
      cy.location("pathname").should("equal", "/shadowdom")
    })

    it("exemplo: Shifting Content", () => {
      cy.get(":nth-child(39) > a").click()
      cy.location("pathname").should("equal", "/shifting_content")
    })

    it("exemplo: Slow Resources", () => {
      cy.get(":nth-child(40) > a").click()
      cy.location("pathname").should("equal", "/slow")
    })

    it("exemplo: Sortable Data Tables", () => {
      cy.get(":nth-child(41) > a").click()
      cy.location("pathname").should("equal", "/tables")
    })

    it("exemplo: Status Codes", () => {
      cy.get(":nth-child(42) > a").click()
      cy.location("pathname").should("equal", "/status_codes")
    })

    it("exemplo: Typos", () => {
      cy.get(":nth-child(43) > a").click()
      cy.location("pathname").should("equal", "/typos")
    })

    it("exemplo: WYSIWYG Editor", () => {
      cy.get(":nth-child(44) > a").click()
      cy.location("pathname").should("equal", "/tinymce")
    })
  })
})

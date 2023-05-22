import { MenuItem } from "./menu.model";

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: "MENUITEMS.MENU.TEXT",
    isTitle: true,
  },
  {
    id: 2,
    label: "TABLEAU DE BORD",
    icon: "bx-home-circle",
  },
  {
    id: 3,
    label: "Client",
    icon: "bx bx-user",

    subItems: [
      {
        id: 4,
        label: "Physique",
        link: "/liste-physique",
        parentId: 3,
      },
      {
        id: 5,
        label: "Entreprise",
        link: "/liste-entreprise",
        parentId: 3,
      },
      {
        id: 6,
        label: "Banque",
        link: "/liste-banque",
        parentId: 3,
      },
    ],
  },
  {
    id: 7,
    isLayout: true,
  },
  {
    id: 8,
    label: "DOSSIERS CLIENTS",
    isTitle: true,
  },
  {
    id: 10,
    label: "Acte Immobilier",
    icon: "bx-home-circle",
    link: "/liste-acteimmo",
  },
  {
    id: 11,
    label: "Société",
    icon: "bx-calendar",
    link: "/rendez-vous",
    subItems: [
      {
        id: 12,
        label: "Création",
        link: "/account/login",
        parentId: 67,
      },
      {
        id: 13,
        label: "Modification",
        link: "/account/login",
        parentId: 67,
      },
    ],
  },
  /*  {
    id: 12,
    label: "Mes rendez-vous",
    icon: "bx-calendar",
    link: "/rendez-vous",
  }, */

  {
    id: 14,
    label: "Comptes bancaires",
    icon: "bx-bitcoin",
    link: "/rendez-vous",
    subItems: [
      {
        id: 15,
        label: "Ligne de Crédit",
        link: "/account/login",
        parentId: 67,
      },
    ],
  },

  {
    id: 17,
    label: "GESTION DE DOCUMENTS",
    isTitle: true,
  },
  {
    id: 19,
    label: "MENUITEMS.FILEMANAGER.TEXT",
    icon: "bx-file",
    link: "/filemanager",
  },

  {
    id: 20,
    label: "PARAMETRAGES",
    isTitle: true,
  },
  {
    id: 21,
    label: "MENUITEMS.AUTHENTICATION.TEXT",
    icon: "bx-user-circle",
    subItems: [
      {
        id: 68,
        label: "MENUITEMS.AUTHENTICATION.LIST.LOGIN",
        link: "/account/login",
        parentId: 67,
      },
      {
        id: 69,
        label: "MENUITEMS.AUTHENTICATION.LIST.LOGIN2",
        link: "/account/login-2",
        parentId: 67,
      },
      {
        id: 70,
        label: "MENUITEMS.AUTHENTICATION.LIST.REGISTER",
        link: "/account/signup",
        parentId: 67,
      },
      {
        id: 71,
        label: "MENUITEMS.AUTHENTICATION.LIST.REGISTER2",
        link: "/account/signup-2",
        parentId: 67,
      },
      {
        id: 72,
        label: "MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD",
        link: "/account/reset-password",
        parentId: 67,
      },
      {
        id: 73,
        label: "MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2",
        link: "/account/recoverpwd-2",
        parentId: 67,
      },
      {
        id: 74,
        label: "MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN",
        link: "/pages/lock-screen-1",
        parentId: 67,
      },
      {
        id: 75,
        label: "MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2",
        link: "/pages/lock-screen-2",
        parentId: 67,
      },
      {
        id: 76,
        label: "MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL",
        link: "/pages/confirm-mail",
        parentId: 67,
      },
      {
        id: 77,
        label: "MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2",
        link: "/pages/confirm-mail-2",
        parentId: 67,
      },
      {
        id: 78,
        label: "MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION",
        link: "/pages/email-verification",
        parentId: 67,
      },
      {
        id: 79,
        label: "MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2",
        link: "/pages/email-verification-2",
        parentId: 67,
      },
      {
        id: 80,
        label: "MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION",
        link: "/pages/two-step-verification",
        parentId: 67,
      },
      {
        id: 81,
        label: "MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2",
        link: "/pages/two-step-verification-2",
        parentId: 67,
      },
    ],
  },
  {
    id: 82,
    label: "Utilitaires",
    icon: "bx-file",
    subItems: [
      {
        id: 83,
        label: "MENUITEMS.UTILITY.LIST.STARTER",
        link: "/pages/starter",
        parentId: 82,
      },
      {
        id: 84,
        label: "MENUITEMS.UTILITY.LIST.MAINTENANCE",
        link: "/pages/maintenance",
        parentId: 82,
      },
      {
        id: 85,
        label: "Coming Soon",
        link: "/pages/coming-soon",
        parentId: 82,
      },
      {
        id: 86,
        label: "MENUITEMS.UTILITY.LIST.TIMELINE",
        link: "/pages/timeline",
        parentId: 82,
      },
      {
        id: 87,
        label: "MENUITEMS.UTILITY.LIST.FAQS",
        link: "/pages/faqs",
        parentId: 82,
      },
      {
        id: 88,
        label: "MENUITEMS.UTILITY.LIST.PRICING",
        link: "/pages/pricing",
        parentId: 82,
      },
      {
        id: 89,
        label: "MENUITEMS.UTILITY.LIST.ERROR404",
        link: "/pages/404",
        parentId: 82,
      },
      {
        id: 90,
        label: "MENUITEMS.UTILITY.LIST.ERROR500",
        link: "/pages/500",
        parentId: 82,
      },
    ],
  },
  {
    id: 91,
    label: "MENUITEMS.COMPONENTS.TEXT",
    isTitle: true,
  },
  {
    id: 116,
    label: "MENUITEMS.FORMS.TEXT",
    icon: "bxs-eraser",
    badge: {
      variant: "danger",
      text: "MENUITEMS.FORMS.BADGE",
    },
    subItems: [
      {
        id: 117,
        label: "MENUITEMS.FORMS.LIST.ELEMENTS",
        link: "/form/elements",
        parentId: 116,
      },
      {
        id: 118,
        label: "MENUITEMS.FORMS.LIST.LAYOUTS",
        link: "/form/layouts",
        parentId: 116,
      },
      {
        id: 119,
        label: "MENUITEMS.FORMS.LIST.VALIDATION",
        link: "/form/validation",
        parentId: 116,
      },
      {
        id: 120,
        label: "MENUITEMS.FORMS.LIST.ADVANCED",
        link: "/form/advanced",
        parentId: 116,
      },
      {
        id: 121,
        label: "MENUITEMS.FORMS.LIST.EDITOR",
        link: "/form/editor",
        parentId: 116,
      },
      {
        id: 122,
        label: "MENUITEMS.FORMS.LIST.FILEUPLOAD",
        link: "/form/uploads",
        parentId: 116,
      },
      {
        id: 123,
        label: "MENUITEMS.FORMS.LIST.REPEATER",
        link: "/form/repeater",
        parentId: 116,
      },
      {
        id: 124,
        label: "MENUITEMS.FORMS.LIST.WIZARD",
        link: "/form/wizard",
        parentId: 116,
      },
      {
        id: 125,
        label: "MENUITEMS.FORMS.LIST.MASK",
        link: "/form/mask",
        parentId: 116,
      },
    ],
  },
];

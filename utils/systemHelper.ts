export function getOs() {
  if (typeof window !== "undefined") {
    const userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Win") !== -1) {
      return "windows";
    } else if (userAgent.indexOf("Mac") !== -1) {
      return "mac";
    } else if (userAgent.indexOf("Linux") !== -1) {
      return "linux";
    } else {
      return "unknown";
    }
  }
  return "unknown";
}

export const osData = {
  windows: {
    icon: "#icon-windows",
    downType: "exe",
  },
  mac: {
    icon: "#icon-mac",
    downType: "dmg",
  },
  linux: {
    icon: "#icon-linux",
    downType: "deb",
  },
  unknown: {
    icon: "#icon-file-unknown",
    downType: null,
  },
};

export const installIcon = {
  exe: "#icon-windows",
  dmg: "#icon-mac",
  deb: "#icon-linux",
};

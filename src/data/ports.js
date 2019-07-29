/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

/**
 * @file Provides metadata about Nord's port projects.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.9.0
 */

import {
  Atom,
  Brackets,
  Coda,
  CommonTerminal,
  CommonTerminalTiled,
  ConEmu,
  Eclipse,
  Emacs,
  Gedit,
  HighlightJs,
  Hyper,
  Java,
  JetBrains,
  NotepadPlusPlus,
  PuTTY,
  Slack,
  SublimeText,
  Tmux,
  Vim,
  VisualStudioCode,
  Xcode,
  Xresources
} from "atoms/core/vectors/logos";

const tokensExtendingSupport = ["addons", "extensions", "packages", "plugins", "support"];

const tokensGUI = ["gui", "user interface"];

const tokensSyntax = ["code", "editor", "highlighting", "ide", "languages", "programming", "source", "syntax", "text"];

const tokensTerminal = ["16bit", "bash", "cli", "linux", "macos", "shell", "terminal", "tty", "unix", "zsh"];

const tokensTerminalTiling = ["tiles", "tiling"];

const ports = [
  {
    name: "nord-alacritty",
    projectName: "Alacritty",
    logoComponent: CommonTerminal,
    projectUrl: "https://github.com/jwilm/alacritty",
    searchTerms: [...tokensTerminal, "alacritty"]
  },
  {
    name: "nord-atom-syntax",
    projectName: "Atom Syntax",
    logoComponent: Atom,
    projectUrl: "https://atom.io",
    searchTerms: [...tokensExtendingSupport, ...tokensSyntax, "atom", "electron", "github", "javascript", "nodejs"]
  },
  {
    name: "nord-atom-ui",
    projectName: "Atom UI",
    logoComponent: Atom,
    projectUrl: "https://atom.io",
    packageThemeRegistryUrl: "https://atom.io/themes/nord-atom-ui",
    searchTerms: [...tokensExtendingSupport, ...tokensGUI, "atom", "electron", "github", "javascript", "nodejs"]
  },
  {
    name: "nord-brackets",
    projectName: "Brackets",
    logoComponent: Brackets,
    projectUrl: "http://brackets.io",
    searchTerms: [...tokensSyntax, "adobe", "brackets", "css", "html", "javascript", "nodejs", "web"]
  },
  {
    name: "nord-coda",
    projectName: "Coda",
    logoComponent: Coda,
    projectUrl: "https://www.panic.com/coda",
    searchTerms: [
      ...tokensSyntax,
      "apple",
      "coda",
      "css",
      "html",
      "hyper",
      "javascript",
      "macos",
      "nodejs",
      "npm",
      "osx",
      "web"
    ]
  },
  {
    name: "nord-conemu",
    projectName: "ConEmu",
    logoComponent: ConEmu,
    projectUrl: "https://conemu.github.io",
    searchTerms: [...tokensTerminal, "conemu", "windows"]
  },
  {
    name: "nord-dircolors",
    projectName: "dircolors",
    logoComponent: CommonTerminal,
    projectUrl: "https://www.gnu.org/software/coreutils/manual/html_node/dircolors-invocation.html",
    searchTerms: [...tokensTerminal, "dircolors", "gnu", "ls"]
  },
  {
    name: "nord-eclipse-syntax",
    projectName: "Eclipse Syntax",
    logoComponent: Eclipse,
    projectUrl: "https://eclipse.org",
    searchTerms: [...tokensSyntax, "eclipse", "java", "jdk", "jvm", "openjdk", "oracle"]
  },
  {
    name: "nord-emacs",
    projectName: "Emacs",
    logoComponent: Emacs,
    projectUrl: "https://www.gnu.org/software/emacs",
    searchTerms: [
      ...tokensExtendingSupport,
      ...tokensSyntax,
      ...tokensTerminal,
      "emacs",
      "gnu",
      "lisp",
      "marmelade",
      "melpa",
      "spacemacs"
    ]
  },
  {
    name: "nord-guake",
    projectName: "Guake",
    logoComponent: CommonTerminal,
    projectUrl: "http://guake-project.org",
    searchTerms: [...tokensTerminal, "gnome", "guake"]
  },
  {
    name: "nord-gnome-terminal",
    projectName: "GNOME Terminal",
    logoComponent: CommonTerminal,
    projectUrl: "https://wiki.gnome.org/Apps/Terminal",
    searchTerms: [...tokensTerminal, "gnome"]
  },
  {
    name: "nord-gedit",
    projectName: "gedit",
    logoComponent: Gedit,
    projectUrl: "https://wiki.gnome.org/Apps/Gedit",
    searchTerms: [...tokensSyntax, "gedit", "gnome"]
  },
  {
    name: "nord-highlightjs",
    projectName: "highlight.js",
    logoComponent: HighlightJs,
    projectUrl: "https://highlightjs.org",
    searchTerms: [...tokensSyntax, "css", "highlightjs", "html", "javascript", "nodejs", "npm", "web"]
  },
  {
    name: "nord-hyper",
    projectName: "Hyper",
    logoComponent: Hyper,
    projectUrl: "https://hyper.is",
    searchTerms: [
      ...tokensExtendingSupport,
      ...tokensGUI,
      ...tokensTerminal,
      "css",
      "html",
      "hyper",
      "javascript",
      "nodejs",
      "npm",
      "web"
    ]
  },
  {
    name: "nord-iterm2",
    projectName: "iTerm2",
    logoComponent: CommonTerminalTiled,
    projectUrl: "https://iterm2.com",
    searchTerms: [...tokensTerminal, "apple", "iterm2", "macos", "osx"]
  },
  {
    name: "nord-java",
    projectName: "Java",
    logoComponent: Java,
    projectUrl: "https://www.java.com",
    searchTerms: ["implementation", "import", "java", "jdk", "jvm", "library", "openjdk", "oracle", "reference"]
  },
  {
    name: "nord-jetbrains",
    projectName: "JetBrains",
    logoComponent: JetBrains,
    projectUrl: "https://www.jetbrains.com",
    pluginRepositoryUrl: "https://plugins.jetbrains.com/plugin/10321-nord",
    searchTerms: [
      ...tokensExtendingSupport,
      ...tokensGUI,
      ...tokensSyntax,
      "appcode",
      "clion",
      "datagrip",
      "dotcover",
      "dotmemory",
      "dotpeek",
      "dottrace",
      "goland",
      "idea",
      "intellij",
      "jetbrains",
      "phpstorm",
      "pycharm",
      "resharper",
      "rider",
      "rubymine",
      "webstorm"
    ]
  },
  {
    name: "nord-konsole",
    projectName: "Konsole",
    logoComponent: CommonTerminal,
    projectUrl: "https://konsole.kde.org",
    searchTerms: [...tokensTerminal, "kde", "konsole"]
  },
  {
    name: "nord-mintty",
    projectName: "Mintty",
    logoComponent: CommonTerminal,
    projectUrl: "https://mintty.github.io",
    searchTerms: [...tokensTerminal, "mintty", "windows"]
  },
  {
    name: "nord-notepadplusplus",
    projectName: "Notepad++",
    logoComponent: NotepadPlusPlus,
    projectUrl: "https://notepad-plus-plus.org",
    searchTerms: [...tokensSyntax, "notepad++", "windows"]
  },
  {
    name: "nord-putty",
    projectName: "PuTTY",
    logoComponent: PuTTY,
    projectUrl: "https://www.chiark.greenend.org.uk/~sgtatham/putty",
    searchTerms: [...tokensTerminal, "putty", "ssh", "windows"]
  },
  {
    name: "nord-slack",
    projectName: "Slack",
    logoComponent: Slack,
    projectUrl: "https://slack.com",
    searchTerms: [...tokensGUI, "slack"]
  },
  {
    name: "nord-sublime-text",
    projectName: "Sublime Text",
    logoComponent: SublimeText,
    projectUrl: "https://www.sublimetext.com",
    searchTerms: [...tokensExtendingSupport, ...tokensGUI, ...tokensSyntax, "sublime"]
  },
  {
    name: "nord-terminal-app",
    projectName: "Terminal.app",
    logoComponent: CommonTerminal,
    projectUrl: "https://support.apple.com/guide/terminal/welcome/mac",
    searchTerms: [...tokensTerminal, "apple", "macos", "osx"]
  },
  {
    name: "nord-terminator",
    projectName: "Terminator",
    logoComponent: CommonTerminalTiled,
    projectUrl: "https://gnometerminator.blogspot.com",
    searchTerms: [...tokensTerminal, ...tokensTerminalTiling, "terminator"]
  },
  {
    name: "nord-termite",
    projectName: "Termite",
    logoComponent: CommonTerminalTiled,
    projectUrl: "https://github.com/thestinger/termite",
    searchTerms: [...tokensTerminal, ...tokensTerminalTiling, "termite"]
  },
  {
    name: "nord-tilix",
    projectName: "Tilix",
    logoComponent: CommonTerminalTiled,
    projectUrl: "https://gnunn1.github.io/tilix-web",
    searchTerms: [...tokensTerminal, ...tokensTerminalTiling, "gnome", "terminix", "tilix"]
  },
  {
    name: "nord-tmux",
    projectName: "tmux",
    logoComponent: Tmux,
    projectUrl: "https://tmux.github.io",
    searchTerms: [
      ...tokensExtendingSupport,
      ...tokensTerminal,
      ...tokensTerminalTiling,
      "multiplexer",
      "process",
      "ssh",
      "tmux"
    ]
  },
  {
    name: "nord-vim",
    projectName: "Vim",
    logoComponent: Vim,
    projectUrl: "https://www.vim.org",
    searchTerms: [...tokensExtendingSupport, ...tokensSyntax, ...tokensTerminal, "improved", "vim"]
  },
  {
    name: "nord-visual-studio-code",
    projectName: "Visual Studio Code",
    logoComponent: VisualStudioCode,
    projectUrl: "https://code.visualstudio.com",
    extensionMarketplaceUrl:
      "https://marketplace.visualstudio.com/items?itemName=arcticicestudio.nord-visual-studio-code",
    searchTerms: [
      ...tokensExtendingSupport,
      ...tokensGUI,
      ...tokensSyntax,
      "electron",
      "microsoft",
      "studio",
      "visual",
      "vscode"
    ]
  },
  {
    name: "nord-xcode",
    projectName: "Xcode",
    logoComponent: Xcode,
    projectUrl: "https://developer.apple.com/xcode",
    searchTerms: [...tokensSyntax, "apple", "macos", "object-c", "osx", "swift", "xcode"]
  },
  {
    name: "nord-xfce-terminal",
    projectName: "Xfce Terminal",
    logoComponent: CommonTerminal,
    projectUrl: "https://docs.xfce.org/apps/terminal/start",
    searchTerms: [...tokensTerminal, "xfce"]
  },
  {
    name: "nord-xresources",
    projectName: "Xresources",
    logoComponent: Xresources,
    projectUrl: "https://wiki.archlinux.org/index.php/x_resources",
    searchTerms: [...tokensTerminal, "dotfiles", "dots", "xrdb", "xresources"]
  }
];

export default ports;

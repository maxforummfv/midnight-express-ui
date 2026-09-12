# Chuyến Tàu Ký Ức

Create a new web RPG interface prototype from scratch.

IMPORTANT:

For this first phase, DO NOT build the complete game.

DO NOT create:

backend

database

Supabase

authentication

login

cloud save

IndexedDB

combat system

monster system

hunger system

crafting system

exploration logic

complex game logic

I only want you to create the BEAUTIFUL FRONTEND / UI FOUNDATION of the game.

The gameplay systems will be implemented later.

==================================================
GAME CONCEPT

The game is a 2D fantasy survival RPG set inside an enormous, seemingly endless train.

The player lives inside one train carriage and must eventually survive day after day, explore during daylight, repair and upgrade the carriage, and defend it from monsters during the night.

The atmosphere should be:

mysterious

lonely

adventurous

slightly dark

magical

old-fashioned

storybook fantasy

The train should look like an old mysterious passenger carriage, NOT a futuristic train.

==================================================
VISUAL STYLE

Create a high-quality 2D illustrated fantasy interface.

The visual direction should be inspired by the general feeling of classic illustrated fantasy websites and old fantasy storybooks, similar in atmosphere to the early Pottermore era.

Do NOT copy Harry Potter, Pottermore, their artwork, characters, logos, or proprietary assets.

Use only the general visual language:

elegant fantasy illustration

classical serif typography

old books

parchment

aged wood

brass

iron

leather

warm candlelight

slightly gothic details

mysterious magical atmosphere

The result should feel like a real fantasy RPG, NOT a SaaS website.

Avoid:

modern corporate UI

generic dashboard design

excessive white rounded cards

glassmorphism

neon cyberpunk

anime

pixel art

futuristic sci-fi

==================================================
LANGUAGE

ALL PLAYER-FACING TEXT MUST BE VIETNAMESE.

Use natural Vietnamese.

Examples:

Trò chơi mới
Tiếp tục
Toa tàu
Nhân vật
Túi đồ
Khám phá
Nhật ký
Cài đặt
Sinh lực
Đói
Khát
Thể lực
Kinh nghiệm
Cấp độ
Vàng
Độ bền
Nâng cấp
Sửa chữa

The typography must properly support Vietnamese characters.

Use beautiful classical serif fonts with good Vietnamese support.

Use decorative typography for major headings, but keep normal gameplay text highly readable.

==================================================
LANDING / TITLE SCREEN

Create a beautiful RPG title screen.

The main visual should be an illustrated train carriage.

The carriage should be moderately upgraded:

reinforced doors

reinforced windows

protective exterior

warm interior lighting

bed

table

kitchen

storage

signs of long-term habitation

The landing page should NOT look like a normal marketing website.

It should look like the title screen of a fantasy RPG.

Include:

Game title

Short atmospheric Vietnamese tagline

"Trò chơi mới"

"Tiếp tục"

"Cài đặt"

Buttons should feel like part of the fantasy world.

==================================================
MAIN GAME SCREEN

Create the main gameplay interface.

The central focus should be a large illustrated interior of the player's train carriage.

The carriage should contain visually distinct interactive areas:

Main door

Windows

Bed

Kitchen

Table

Storage

Bathroom

Toilet

These objects should visibly look clickable/tappable.

For now, clicking them can simply show a small contextual panel saying that the feature will be implemented later.

Do NOT implement actual gameplay.

==================================================
PLAYER STATUS UI

Create a beautiful compact status display showing:

Sinh lực
Đói
Khát
Thể lực

Also display:

Ngày 1
08:00

These are visual placeholders only.

Do NOT implement the actual time system yet.

==================================================
GLOBAL NAVIGATION

Create navigation for:

Toa tàu
Nhân vật
Túi đồ
Khám phá
Nhật ký
Cài đặt

These screens should exist visually, but their functionality can be placeholder content.

==================================================
DESKTOP

Desktop should feel like a full RPG interface.

Suggested layout:

Top:
Player status + game time

Center:
Large illustrated train carriage

Side area:
Contextual information/actions

Bottom or side:
Game navigation

The carriage illustration must remain the visual focus.

==================================================
MOBILE

MOBILE IS A FIRST-CLASS PLATFORM.

Do NOT simply shrink the desktop layout.

Design a dedicated mobile experience.

Support:

portrait phone screens

touch interaction

large touch targets

readable text

responsive scaling

bottom navigation

touch-friendly contextual panels

On mobile:

Top:
Compact status bar

Center:
Large interactive carriage illustration

Bottom:
Touch-friendly navigation:

Toa tàu | Nhân vật | Túi đồ | Khám phá | Nhật ký

Menus may use bottom sheets or full-screen panels.

Do not require hover for any important interaction.

==================================================
RESPONSIVE BEHAVIOR

Test the interface mentally and visually at:

1920x1080

1440x900

1024x768

768x1024

430x932

390x844

The UI must remain usable and attractive at all sizes.

==================================================
IMPORTANT

Do NOT build backend functionality.

Do NOT build database functionality.

Do NOT build gameplay systems.

Do NOT create fake complex systems just to make the prototype look complete.

Focus on:

Visual quality

Fantasy atmosphere

Train carriage illustration

Typography

Desktop layout

Mobile layout

Navigation

Interactive-looking objects

Responsive behavior

Make the result feel like a polished RPG prototype rather than a generic website.

After completing this phase, STOP.

Do not automatically implement additional gameplay systems.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7203da66-1b74-4f65-858e-725fed354c21).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

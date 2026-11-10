# 🌟 Guide Complet & Transfert de Propriété — Portfolio de Fabula Ayman

Bienvenue Fabula ! Ce site est ton portfolio professionnel en ligne : **Content Creator | Scriptwriter | Creative**. Il présente tes créations publicitaires, tes concepts de script, tes vidéos de marque (Williams Art), tes documentaires culturels et tes expériences.

* **Adresse de ton site en ligne :** 👉 [https://youhannamaher.github.io/fabula-portfolio/](https://youhannamaher.github.io/fabula-portfolio/)

---

## ⚡ 1. Les 3 Boutons Magiques (Sans coder)

Tu n'as jamais besoin de taper de commandes complexes dans un terminal. Il te suffit de double-cliquer sur ces 3 fichiers dans ton dossier :

| Fichier | Ce qu'il fait |
| :--- | :--- |
| 👉 **`open-portfolio-preview.cmd`** | **Voir le site sur ton ordinateur & ton téléphone** en direct avant de publier. |
| 👉 **`update-videos-preview.cmd`** | **Mettre à jour la galerie de vidéos** dès que tu as ajouté une vidéo ou modifié les vues dans `metadata.json`. |
| 👉 **`push-to-github.cmd`** | **Publier en ligne !** En 1 clic, il enregistre tout et met à jour ton site internet officiel en 1 à 2 minutes. |

---

## 📁 2. Quel fichier modifier pour quoi ? (La Carte Mémoire)

Tout dans ton portfolio est centralisé dans **5 emplacements simples** :

```
📁 Fabula Portfolio/
├── 📁 public/
│   ├── 📁 videos/
│   │   ├── 📄 metadata.json          <-- Titres des vidéos, projets, catégories, nombre de VUES
│   │   └── 🎥 (tes fichiers vidéo)   <-- Ajoute ici tes vidéos .mp4 ou .mov
│   ├── 📁 images/
│   │   ├── 🖼️ profile.jpeg           <-- Ta photo de profil
│   │   └── 🖼️ williams-art-logo.png  <-- Le logo Williams Art
│   └── 📁 documents/
│       └── 📄 FABULA.CV.pdf          <-- Ton CV en PDF
└── 📁 src/
    └── 📁 data/
        └── 📄 profile.ts              <-- TOUS tes textes (Bio, Titre, Compétences, Expériences, Projets, Liens)
```

---

## 🤖 3. Le Prompt Maître à donner à ton IA (Claude, ChatGPT, etc.)

Copie-colle le texte ci-dessous dans Claude ou ChatGPT au début de ta conversation :

```text
Tu es mon assistant technique personnel pour la maintenance et la mise à jour de mon portfolio professionnel (Fabula Ayman - Content Creator & Scriptwriter).

Le site est développé en React 19, TypeScript et Tailwind CSS avec Vite, hébergé sur GitHub Pages.

Voici l'architecture des données :
1. "src/data/profile.ts" contient :
   - name, title, email, location, languages, linkedin, cvPath, profileImage, about
   - skills: liste d'objets { title, description }
   - experience: liste d'objets { role, company, period, description }
   - projects: liste d'objets { title, category, role, objective, tools, link, logo }

2. "public/videos/metadata.json" contient la liste des vidéos affichées :
   - filename: nom exact du fichier vidéo dans public/videos/
   - title: titre affiché sur le site
   - category: ex. "Branding", "Documentary", "Travel"
   - project: ex. "Williams Art", "Alexandria Museums", "Documentary & Exploration"
   - views: ex. "15K+ views" ou "120K views" (nombre de vues obtenues)
   - order: ordre d'affichage (1, 2, 3...)

3. Scripts automatisés sous Windows :
   - open-portfolio-preview.cmd pour tester en local.
   - update-videos-preview.cmd pour synchroniser les vidéos après modification de metadata.json.
   - push-to-github.cmd pour publier en direct sur https://youhannamaher.github.io/fabula-portfolio/

Consignes pour tes réponses :
- Lorsque je te demande une modification, donne-moi le bloc exact de code à remplacer et le nom exact du fichier.
- Reste simple et explique-moi étape par étape où copier-coller.
- Rappelle-moi toujours de double-cliquer sur "push-to-github.cmd" pour mettre le site en ligne.
```

---

## 💡 4. Exemples concrets : Que dire à ton IA ?

### Exemple A : Modifier le nombre de vues sur une vidéo
> **Ce que tu dis à ton IA :**  
> *"Voici mon fichier `public/videos/metadata.json`. Je veux changer les vues de la vidéo 'William's Passion' à '45K views' et 'Introducing William's Art' à '28K views'."*  
> 👉 L'IA te donnera le fichier `metadata.json` modifié. Tu le colles, puis tu double-cliques sur **`push-to-github.cmd`**.

### Exemple B : Ajouter ton lien de projet Freelance
> **Ce que tu dis à ton IA :**  
> *"Voici mon fichier `src/data/profile.ts`. Je veux remplacer le lien du projet Freelance Scriptwriting par mon vrai lien : https://mon-vrai-lien.com"*  
> 👉 L'IA te donnera la ligne exacte à remplacer.

### Exemple C : Ajouter une nouvelle expérience professionnelle
> **Ce que tu dis à ton IA :**  
> *"Voici mon fichier `src/data/profile.ts`. J'ai une nouvelle mission freelance en tant que Scriptwriter pour telle marque, voici les détails : [...]. Peux-tu l'ajouter dans la liste experience ?"*  
> 👉 L'IA mettra à jour la section `experience`.

### Exemple D : Ajouter une nouvelle vidéo sur le site
1. Glisse ta nouvelle vidéo (ex. `Ma_Nouvelle_Campagne.mov`) dans le dossier **`public/videos/`**.
2. Ouvre **`public/videos/metadata.json`** et dis à ton IA :
   > *"J'ai ajouté un nouveau fichier vidéo 'Ma_Nouvelle_Campagne.mov'. Peux-tu l'ajouter à metadata.json avec le titre 'Campagne Été', le projet 'Williams Art', la catégorie 'Branding', et '18K views' ?"*
3. Remplace le contenu de `metadata.json`.
4. Double-clique sur **`update-videos-preview.cmd`** pour vérifier, puis sur **`push-to-github.cmd`** pour publier !

---

## 🖼️ 5. Astuce importante pour les photos & logos (Windows)
Sous Windows, les extensions comme `.jpg` ou `.png` sont parfois masquées.
* Ta photo de profil doit être dans `public/images/profile.jpeg`.
* Le logo de Williams Art est dans `public/images/williams-art-logo.png` (le site accepte aussi `.jpg`).
* Ton CV doit être nommé `public/documents/FABULA.CV.pdf`.

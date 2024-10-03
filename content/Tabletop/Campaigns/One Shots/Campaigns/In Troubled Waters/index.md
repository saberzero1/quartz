---
{"id":"e1c34906-a1d5-4c37-8bd0-8e075d809644","title":"In Troubled Waters","description":"In Troubled Waters Overview.","publish":true,"date_created":"Sunday, June 16th 2024, 1:32:07 am","date_modified":"Saturday, June 22nd 2024, 1:54:09 pm","editing_lock":false,"live_preview":true,"cssclasses":["mado-heading"],"path":"Tabletop/Campaigns/One Shots/Campaigns/In Troubled Waters/index.md","permalink":"/tabletop/campaigns/one-shots/campaigns/in-troubled-waters/index/","PassFrontmatter":true}
---


![Tabletop/Assets/Bestiary/Images/Aquatic Goblin.png](../../../../../Tabletop/Assets/Bestiary/Images/Aquatic%20Goblin.png)

<!--
<pre class="dataview dataview-error">Evaluation Error: SyntaxError: Invalid or unexpected token
    at DataviewInlineApi.eval (plugin:dataview:18885:21)
    at evalInContext (plugin:dataview:18886:7)
    at asyncEvalInContext (plugin:dataview:18896:32)
    at DataviewJSRenderer.render (plugin:dataview:18922:19)
    at DataviewJSRenderer.onload (plugin:dataview:18464:14)
    at DataviewJSRenderer.load (app://obsidian.md/app.js:1:1167753)
    at DataviewApi.executeJs (plugin:dataview:19465:18)
    at DataviewCompiler.eval (plugin:quartz-syncer:10848:23)
    at Generator.next (&lt;anonymous&gt;)
    at eval (plugin:quartz-syncer:90:61)
    at new Promise (&lt;anonymous&gt;)
    at __async (plugin:quartz-syncer:74:10)
    at eval (plugin:quartz-syncer:10791:41)
    at SyncerPageCompiler.eval (plugin:quartz-syncer:17226:50)
    at Generator.next (&lt;anonymous&gt;)
    at eval (plugin:quartz-syncer:90:61)
    at new Promise (&lt;anonymous&gt;)
    at __async (plugin:quartz-syncer:74:10)
    at eval (plugin:quartz-syncer:17224:50)
    at SyncerPageCompiler.eval (plugin:quartz-syncer:17162:36)
    at Generator.next (&lt;anonymous&gt;)
    at fulfilled (plugin:quartz-syncer:77:24)</pre>statblock\ncreature: Aquatic Goblin\n```", { attr: { style: "max-width:400px;" } })
```
-->


<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# Captain Lou Shen

</div>




```statblock
creature: Yuan-ti Abomination
image: Tabletop/Assets/Bestiary/Homebrew/_img/mme2_v2/creatures/token2/Yuan-ti Mageslayer.webp
name: Captain Lou Shen (Yuan-ti Abomination)
```


</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# Quartermaster Guy

</div>




```statblock
extends: Alleybasher Ogre
name: Quartermaster Guy (Alleybasher Ogre)
```


</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# Surgeon Mick

</div>




```statblock
creature: Cult Fanatic of Night
name: Surgeon Mick (Cult Fanatic of Night)
traits:
  - name: Fiendmarked
    desc: The fanatic appears fiendish to any ability that can detect extraplanar essences.
  - name: Solipsistic
    desc: The fanatic may treat illusions that it and its allies create as real.
  - name: Dark Grace
    desc: If the fanatic would take half damage due to succeeding on a saving throw while in dim light or darkness, it takes no damage instead.
  - name: Devil's Sight
    desc: Magical darkness doesn't impede the fanatic's darkvision.
```


</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# Cook Elle

</div>




```statblock
creature: Glass Mephit
name: Cook Elle (Glass Mephit)
stats: [10, 18, 12, 16, 10, 11]
ac: 14
spells:
  - Cook Elle (Glass Mephit)'s innate spellcasting ability is Intelligence (spell save 15). Cook Elle (Glass Mephit) can innately cast the following spells, requiring no material components
  - At will: Glass Shard
actions:
  - name: Slice
    desc: Melee Weapon Attack +6 to hit, reach 5 ft., one target. _Hit_ 6 (2d4) slashing damage. On a critical hit, the mephit may use its invibility as a bonus action this turn, if available.
  - name: Invisibility (Concentration, Recharge 6)
    desc: The mephit magically turns invisible until it attacks.
  - name: Glass Shard (Cantrip)
    desc: Ranged Spell Attack +6 to hit, range  120ft., A sharp shard of blue-white glass streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 10 (2d8) piercing damage, and its speed is reduced by 10 feet until the start of Cook Elle (Glass Mephit)'s next turn.
```


</div></div>



<div class="transclusion internal-embed is-loaded"><div class="markdown-embed">

<div class="markdown-embed-title">

# Possessed Figurehead Morpheus

</div>




```statblock
creature: Animated Object (Huge)
name: Possessed Figurehead Morpheus (Animated Object (Huge))
hp: 136
hit_dice: 20d12 + 16
condition_immunities: "charmed, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained"
senses: blindsight 60 ft. (blind beyond this radius), darkvision 60 ft., passive Perception 6
traits:
  - name: Animated
    desc: If the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or larger object, such as a chain bolted to a wall, its speed is 0. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form. The DM might rule that a specific objects slam attack inflicts slashing or piercing damage based on its form.
actions:
  - name: Multiattack
    desc: Possessed Figurehead Morpheus makes two attacks, **Retrieve Anchor** counts as a single attack.
  - name: Slam
    desc: Melee Weapon Attack +8 to hit, reach 5 ft., one target. 16 (2d12 + 4) bludgeoning damage.
  - name: Anchor Smash
    desc: Melee Weapon Attack +8 to hit, reach 10 ft., one target. 14 (2d10 + 4) bludgeoning damage.
  - name: Anchor Toss
    desc: Ranged Weapon Attack +6 to hit range 20/60 ft., one target. 9 (2d4 + 4) bludgeoning damage, and target is grappled (escape 15).
  - name: Anchor Yank
    desc: Ranged Weapon Attack +15 to hit range 20/60 ft., one target. 9 (2d4 + 4) bludgeoning damage. Pulls target up to 60 ft. towards Possessed Figurehead Morpheus. Requires target grappled with **Anchor Toss**.
  - name: Retrieve Anchor
    desc: Pulls back the Anchor, returning it to Possessed Figurehead Morpheus.
```


</div></div>


```
Captain: 0/127/15
Quartermaster: 0/85/13
Surgeon: 6/45/13
Elle: 0/30/14
Morpheus: 0/136/10
```
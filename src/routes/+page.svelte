<!-- src/routes/+page.svelte -->
<script>
  import Homepage from "$lib/components/homepage.svelte";
  import Elements from "$lib/components/min-elements.svelte";
  import SectionAbout from "$lib/components/section-about.svelte";
  import SectionContact from "$lib/components/section-contact.svelte";
  import SectionProjects from "$lib/components/section-projects.svelte";
  import SectionSkills from "$lib/components/section-skills.svelte";
</script>

<Elements />
<Homepage />
<SectionAbout />
<SectionProjects />
<SectionSkills />
<SectionContact />

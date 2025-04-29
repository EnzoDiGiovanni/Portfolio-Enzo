<!-- src/routes/+page.svelte -->
<script>
  import SectionAbout from "$lib/components/about/section-about.svelte";
  import SectionContact from "$lib/components/contact/section-contact.svelte";
  import Homepage from "$lib/components/home/homepage.svelte";

  import SectionProjects from "$lib/components/projects/section-projects.svelte";
  import SectionSkills from "$lib/components/skills/section-skills.svelte";
</script>

<Homepage />
<SectionAbout />
<SectionProjects />
<SectionSkills />
<SectionContact />

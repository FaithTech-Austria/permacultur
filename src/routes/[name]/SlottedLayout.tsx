import { Slot, component$ } from "@builder.io/qwik";
import StepNavigation from '~/components/StepNavigation/StepNavigation';
import { steps } from '~/routes/[name]/Steps';
import { Link, useLocation } from '@builder.io/qwik-city';

export default component$(() => {  
  const loc = useLocation()
  const currentStepName = loc.params.name as keyof typeof steps
  const step = currentStepName in steps ? steps[currentStepName] : steps.welcome

  return (
    <>
      <div class="left">

        <header class="bg-light p-5">
          {step !== steps.welcome ? <h5><Link href={import.meta.env.BASE_URL}>Permacultr</Link></h5> : null}
          <Slot name="title"></Slot>
        </header>
        <div class="p-5">
          <Slot />
        </div>
      </div>

      <div class="right">
        <Slot name="right" />
      </div>

      {step.inList ? <StepNavigation /> : null}
    </>
  );
});

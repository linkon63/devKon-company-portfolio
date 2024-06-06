<template>
  <section
    class="bg-[#FAFAFC] whoWorkWithAnimationEnd companyWorkingLogoSection"
  >
    <div class="container mx-auto px-6 sm:px-24">
      <section class="w-full lex justify-center">
        <div class="flex justify-center">
          <div class="mt-12">
            <!-- heading section -->
            <div class="text-center">
              <div class="our-eff-heading">
                <div
                  class="text-center text-[#6E6E73] font-r-semibold text-[20px] md:text-[30px] lg:text-[40px] mb-[24px]"
                >
                  Our Strength
                </div>
                <div
                  class="text-center text-[#212121] text-[30px] md:text-[60px] lg:text-[84px] font-r-b mb-[40px]"
                >
                  Our Efficiency
                </div>
              </div>

              <div class="flex justify-center">
                <p
                  class="w-9/12 text-[#6E6E73] text-xl md:text-[24px] lineheight-32"
                >
                  Since our establishment, we have been delivering high-quality
                  and sustainable software solutions for corporate purposes of
                  worldwide businesses.
                </p>
              </div>

              <div class="flex justify-center mb-[40px]">
                <p
                  class="px-2 py-4 lg:py-8 text-[#212121] text-2xl md:text-3xl lg:text-[32px] lineheight-52"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div class="flex justify-center">
                <div>
                  <img class="rounded-[35px] w-[1364px]" src="../../../assets/images/home/eficiency-immg.png" />
                </div>
              </div>
              <ShortDescription
                title="Overview"
                first_description="A Michigan based company approached us to develop a food delivery
                    platform, which they would offer to local restaurants and delivery
                    persons in a region as a third-party platform for getting the food to
                    the doorstep of the customer. The customer would use the platform to
                    find the nearest restaurants and get their food delivered to their
                    destinations."
                second_description=" The client is primarily involved in offering tech solutions to
                    businesses within the transportation domain, connecting the dots between
                    service providers and the consumers. The company does not directly
                    employ any individual offering delivery service; it just provides the
                    platform using which enterprises can streamline their day-to-day action."
              />
              <ShortDescription
                title="Challenges"
                first_description="The client reached out to us at the juncture where he was
                  facing lots of issues in developing the platform. He had
                  connected with multiple developers presenting the scope and
                  scale of the project but no one was able to deliver what he
                  was seeking."
                second_description="After working with a few developers, he finally came across
                  Brainium online. Once he laid out his requirements and the
                  scope of the platform development, we spared no time in
                  accepting and initiating it by forming a team that would lead
                  and handle the project, along with setting a line of contact."
              />
            </div>
          </div>
        </div>
        <Tabs />
      </section>
    </div>
  </section>
</template>

<script setup>
import ShortDescription from "./shared/ShortDescription.vue";
import Tabs from "./shared/TabsSection.vue";
</script>

<style scoped></style>

<template>
  <div class="mt-8">
    <!-- Tabs -->
    <div class="flex sm:justify-center md:justify-center">
      <ul
        id="tabs"
        class="border-b-[1px] border-gray-400 text-xl sm:text-2xl md:text-3xl lg:text-[32px] block text-center sm:inline-flex sm:justify-center pt-2 px-1 container"
      >
        <li
          @click="selectedTab('technology_tab')" id="technology_tab" class="font-semibold px-6 md:px-8 lg:px-12 text-gray-800 py-2 bg-transparent text-nowrap"
        >
          <a
            class="text-xl sm:text-2xl md:text-3xl lg:text-[32px]"
            id="default-tab"
            href="#technology"
            ><span id="technology_tab_span" class="pb-[.55rem] md:pb-[.4rem] lg:pb-[.35rem] border-b-2 hover:border-b-2 border-[#6E6E73] outline-none">Technology</span></a
          >
        </li>
        <li
        @click="selectedTab('solution_tab')" id="solution_tab" class="border-t-0 border-l-0 border-r-0 px-6 md:px-8 lg:px-12 text-gray-800 py-2 bg-transparent text-nowrap"
        >
          <a class="text-xl sm:text-2xl md:text-3xl lg:text-[32px]" href="#solution"><span id="solution_tab_span" class="pb-[.55rem] md:pb-[.4rem] lg:pb-[.35rem]  hover:border-b-2 border-[#6E6E73] border-t-0 border-l-0 border-r-0">Solution</span></a>
        </li>
        <li
        @click="selectedTab('clients_tab')" id="clients_tab" class="border-t-0 border-l-0 border-r-0 px-6 md:px-8 lg:px-12 text-gray-800 py-2 bg-transparent text-nowrap"
        >
          <a class="text-xl sm:text-2xl md:text-3xl lg:text-[32px]" href="#clients_feedback"
            ><span id="clients_tab_span" class="pb-[.55rem] md:pb-[.4rem] lg:pb-[.35rem]  hover:border-b-2 border-[#6E6E73]  border-t-0 border-l-0 border-r-0">Clients Feedback</span></a
          >
        </li>
      </ul>
    </div>
    <!-- Tab Contents -->
    <div id="tab-contents" class=" bg-[#FAFAFC] rounded-3xl">
      <div id="technology" class="py-2 lg:py-2 flex justify-center">
        <SingleTab
            topDescription = "Our first job was to identify the initial challenges and then chalk out a
                plan to mitigate it by integrating precise and highly functional features.
                We started by categorizing the users of the platform and creating separate
                access points, drawing up the permission protocol for registration and
                log-in processes, followed by building a robust admin panel that would be
                at the helm of all operations with maximum backend-access. Here are our
                user categories"
            :descriptionList = "technologyItemsDescription"
        />
      </div>
      <div id="solution" class="hidden flex justify-center">
        <SingleTab
                topDescription = "Solution Tab"
                :descriptionList = "technologyItemsDescription"
            />
      </div>
      <div id="clients_feedback" class="hidden flex justify-center">
        <SingleTab
                topDescription = "Client Section"
                :descriptionList = "technologyItemsDescription"
            />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import SingleTab from './SingleTab.vue'

const technologyItemsDescription = reactive([
    {
        title: 'User Interface',
        list: [
            {
                item: 'Admin Interface'
            },
            {
                item: 'Restaurant Interface'
            },
            {
                item: 'Customer Interface'
            },
            {
                item: 'Delivery Person Interface'
            }
        ],
        description: 'We kept the log-in and registration simple, enabling users to use their social media credentials or Gmail credentials to sign-up. To ensure a secured sign-in process, we also introduced the option of ‘login via OTP’ which one can access via email. The password retrieval process was also linked with email OTP.'
    },
    {
        title: 'Web/App',
        list: [
            {
                item: 'Home Screen'
            },
            {
                item: 'Restaurant List And Map View'
            },
            {
                item: 'Restaurant Details'
            },
            {
                item: 'Checkout And Payment'
            },
            {
                item: 'Live Tracking Page'
            }
        ],
        description: 'For the customers we created a personalized section, which would have details like, account settings, my favorite restaurants, my orders, my addresses, help & support, wishlist, along with ratings and review of the food delivered for the restaurant and the service for the app and the delivery person.'
    },
    {
        title: 'Admin Pannel',
        list: [
            {
                item: 'Account Settings'
            },
            {
                item: 'Sub-Admin Management'
            },
            {
                item: 'User Management'
            },
            {
                item: 'Menu Management'
            },
            {
                item: 'Discount Management'
            },
            {
                item: 'Restaurants Category Management'
            },
            {
                item: 'Order Management'
            },
            {
                item: 'Reports Management'
            },
            {
                item: 'Payment Management'
            },
            {
                item: 'Rating & Review'
            }
        ],
        description: 'Here is a detailed layout of the category wise specific features included to make the app function smoothly'
    }
]);

onMounted(() => {
  document.getElementById("tab-contents").classList.add("scale-100");

  var tabsContainer = document.querySelector("#tabs");
  var tabTogglers = tabsContainer.querySelectorAll("#tabs a");
  tabTogglers.forEach(function (toggler) {
    toggler.addEventListener("click", function (e) {
      e.preventDefault();
      document.getElementById("tab-contents").classList.remove("scale-100");
      setTimeout(() => {
        document.getElementById("tab-contents").classList.add("scale-100");
      }, 500);

      var tabName = this.getAttribute("href");
      var tabContents = document.querySelector("#tab-contents");
      for (let i = 0; i < tabContents.children.length; i++) {
        tabContents.children[i].classList.remove("hidden");
        if ("#" + tabContents.children[i].id === tabName) {
          continue;
        }
        tabContents.children[i].classList.add("hidden");
      }
    });
  });
});

const selectedTab = (id) => {
  let element = document.getElementById(id);
  let spanElement = document.getElementById(id+'_span');
  element.classList.add("font-semibold");
  spanElement.classList.add("border-b-2");

  ['technology_tab', 'solution_tab', 'clients_tab'].filter(el => el != id).forEach(item => {
    let removeElement = document.getElementById(item);
    removeElement.classList.remove("font-semibold");

  });

  ['technology_tab_span', 'solution_tab_span', 'clients_tab_span'].filter(el => el != id+'_span').forEach(item => {
    let removeSpanElement = document.getElementById(item);
    removeSpanElement.classList.remove("border-b-2");

  })

};

</script>

<style scoped></style>

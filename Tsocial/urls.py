from django.conf.urls import patterns, include, url
from django.contrib import admin

from control.viewsets import PacientesViewSet
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'pacientes', PacientesViewSet)

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'Tsocial.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'control.views.pacientes'),
    url(r'^agregar/', 'control.views.add_paciente'),
    url(r'^api-ts/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

)
